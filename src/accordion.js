import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AccordionProvider } from './accordion-context'
import { useAccordionContext } from './accordion-context'
import { Panel } from './panel'
import accordionStyle from './accordion.css'

/**
    Accordion to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1,
    https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html,
    accessible accordions have the following required keyboard support:

    🔑 SPACE & ENTER:
        ⭐ When focus is on the accordion header of a collapsed section, expands the section.
    🔑 TAB:
        ⭐ Moves focus to the next focusable element.
        ⭐ All focusable elements in the accordion are included in the page Tab sequence.
    🔑 SHIFT + TAB:
        ⭐ Moves focus to the previous focusable element.
        ⭐ All focusable elements in the accordion are included in the page Tab sequence.
    🔑 DOWN ARROW:
        ⭐ When focus is on an accordion header, moves focus to the next accordion header.
        ⭐ When focus is on last accordion header, moves focus to first accordion header.
    🔑 UP ARROW:
        ⭐ When focus is on an accordion header, moves focus to the previous accordion header.
        ⭐ When focus is on first accordion header, moves focus to last accordion header.
    🔑 HOME:
        ⭐ When focus is on an accordion header, moves focus to the first accordion header.
    🔑 END:
        ⭐ When focus is on an accordion header, moves focus to the last accordion header.
*/

export const Accordion = ({ title, children }) => {
    return (
        <AccordionProvider>
            <Panels children={ children }/>
        </AccordionProvider>
    )
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([Panel])
    }))
}

Accordion.defaultProps = {
    title: '',
}

const Panels = ({ children }) => {
    const { activeIds, toggleId, focusedIndex, setFocusedIndex } = useAccordionContext()

    if (process.env.NODE_ENV === 'development') {
        const panelIds = new Set()
        children.map((child, i) => {
            if (panelIds.has(child.props.id)) {
                console.warn(`Panel ids should be unique; the id "${ child.props.id }" is a duplicate.`)
            } else {
                panelIds.add(child.props.id)
            }
        })
    }

    return (
        <div className={ accordionStyle.accordion }>
            {
                children.map((child, i) => {
                    const id = `panel__${ child.props.id }`
                    return React.cloneElement(child, {
                        key: id,
                        active: activeIds.includes(id),
                        focused: i === focusedIndex,
                        clickHandler: toggleId(id),
                        onFocus: () => setFocusedIndex(i),
                        onKeyDown: event => {
                            switch(event.key) {
                                case 'ArrowUp':
                                    event.preventDefault()
                                    setFocusedIndex((focusedIndex - 1 + React.Children.count(children)) % React.Children.count(children))
                                    break
                                case 'ArrowDown':
                                    event.preventDefault()
                                    setFocusedIndex((focusedIndex + 1) % React.Children.count(children))
                                    break
                                case 'Home':
                                    event.preventDefault()
                                    setFocusedIndex(0)
                                    break
                                case 'End':
                                    event.preventDefault()
                                    setFocusedIndex(React.Children.count(children) - 1)
                                    break
                                default:
                                    break
                            }
                        },
                    })
                })
            }
        </div>
    )
}
