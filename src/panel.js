import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ExpandIcon } from './expand-icon'
import accordionStyle from './accordion.css'

export const Panel = ({ active, focused, id, title, children, styles = {}, clickHandler, ...rest }) => {
    const [height, setHeight] = useState(0)
    const bodyElement = useRef(null)
    const panelRef = useRef()

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
        <article id={ id } className={ accordionStyle.panelWrapper } { ...rest }>
            <header className={ styles.header }>
                <button id={ headerId } className={ accordionStyle.headerButton } onClick={ clickHandler } aria-controls={ bodyId } aria-expanded={ active } ref={ panelRef } style={ styles.header }>
                    <h2 className={ accordionStyle.title } style={ styles.title }>{ title }</h2>
                    <span className={ accordionStyle.iconWrapper }>
                        <ExpandIcon size={ 12 } active={ active } color={ active ? 'crimson' : '#333' } />
                    </span>
                </button>
            </header>
            <div
                active={ active } height={ height } ref={ bodyElement }
                id={ bodyId } aria-labelledby={ headerId }
                className={ accordionStyle.body }
                style={{
                    transition: active ? `max-height 250ms, opacity 500ms 100ms` : `max-height 500ms 100ms, opacity 250ms`,
                    maxHeight: `${ height }px`,
                    opacity: active ? 1 : 0,
                }}
            >
                <div className={ accordionStyle.panelContents } hidden={ !active } style={ styles.body }>
                    { children }
                </div>
            </div>
        </article>
    )
}

