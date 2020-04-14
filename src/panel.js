import React, { useEffect, useRef, useState } from 'react'
import { ExpandIcon } from './expand-icon'
import accordionStyle from './accordion.css'
import { useAccordion } from './accordion'

const IndicatorIcon = ({ active }) => {
    return (
        <span className={ accordionStyle.iconWrapper }>
            <ExpandIcon size={ 12 } active={ active } color={ active ? 'crimson' : '#333' } />
        </span>
    )
}

export const Panel = ({ active, focused, id, title, children, styles = {}, clickHandler, ...rest }) => {
    const [height, setHeight] = useState(0)
    const bodyElement = useRef(null)
    const panelRef = useRef()
    const { panelStyles, iconPlacement } = useAccordion()

    useEffect(() => {
        setHeight(active ? bodyElement.current.scrollHeight : 0)
    }, [active])

    useEffect(() => {
        if (focused && panelRef.current) {
            panelRef.current.focus()
        }
    }, [focused])

    const headerId = `${ id }__header`
    const bodyId = `${ id }__body`
    
    return (
        <article id={ id }
            className={ accordionStyle.panelWrapper }
            { ...rest }
        >
            <header className={ panelStyles.header }>
                <button ref={ panelRef } id={ headerId } className={ accordionStyle.headerButton } style={ panelStyles.header }
                    onClick={ clickHandler } aria-controls={ bodyId } aria-expanded={ active }
                >
                    { iconPlacement === 'left' && <IndicatorIcon active={ active } /> }
                    <h2 className={ accordionStyle.title } style={ panelStyles.title }>{ title }</h2>
                    { iconPlacement === 'right' && <IndicatorIcon active={ active } /> }
                </button>
            </header>
            <div
                ref={ bodyElement } id={ bodyId } aria-labelledby={ headerId }
                // default body styling
                className={ accordionStyle.body }
                // these styles control the body grow/shrink animation
                style={{
                    transition: active ? `max-height 250ms, opacity 500ms 100ms` : `max-height 500ms 100ms, opacity 250ms`,
                    maxHeight: `${ height }px`,
                    opacity: active ? 1 : 0,
                }}
            >
                <div className={ accordionStyle.panelContents } style={ panelStyles.body } hidden={ !active }>
                    { children }
                </div>
            </div>
        </article>
    )
}

