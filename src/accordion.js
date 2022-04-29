import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Panel } from './panel'
import defaultStyles from './styles.js'

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

export const AccordionContext = createContext()

export const Accordion = ({ children, iconPlacement }) => {
  const [panelIds, setPanelIds] = useState([])
  const [openIds, setOpenIds] = useState([])
  const [focusedIndex, setFocusedIndex] = useState(-1)
  
  useEffect(() => {
    const panels = React.Children.toArray(children)
      .filter(child => child.type.name === 'Panel')
    const ids = panels.map(panel => `panel__${ panel.props.id }`)
    setPanelIds(ids)
  }, [])

  /*
   * returns a function the will either add or remove the given id, as necessary.
   * @param {string} id: id of panel.
   */
  const togglePanelIdOpen = id => event => {
    const newOpenIds = openIds.includes(id)
      ? openIds.filter(j => j !== id)
      : [...openIds, id]
    setOpenIds(newOpenIds)
  }

  return (
    <AccordionContext.Provider
      value={{
        defaultStyles,
        openIds,
        togglePanelIdOpen,
        focusedIndex,
        setFocusedIndex,
        iconPlacement,
      }}
    >
      <div style={ defaultStyles.accordion }>
        {
          React.Children.map(children, (child, i) => {
            const id = `panel__${ child.props.id }`
            return React.cloneElement(child, {
              key: id,
              active: openIds.includes(id),
              focused: i === focusedIndex,
              clickHandler: togglePanelIdOpen(id),
              style: defaultStyles.panelWrapper,
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
    </AccordionContext.Provider>
  )
}

export const useAccordion = () => useContext(AccordionContext)

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  iconPlacement: PropTypes.string,
}

Accordion.defaultProps = {
  iconPlacement: 'right',
}
