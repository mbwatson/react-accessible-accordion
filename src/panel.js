import React, { useEffect, useRef, useState } from 'react'
import { ExpandIcon } from './expand-icon'
import accordionClasses from './accordion.module.css'
import { useAccordion } from './accordion'

const IndicatorIcon = ({ active }) => {
  return (
    <span className={ accordionClasses.iconWrapper }>
      <ExpandIcon size={ 12 } active={ active } color={ active ? 'crimson' : '#333' } />
    </span>
  )
}

export const Panel = ({
    active,
    focused,
    id,
    title,
    clickHandler,
    children,
    ...rest
  }) => {
  const [height, setHeight] = useState(0)
  const bodyElement = useRef(null)
  const panelRef = useRef()
  const { defaultStyles, iconPlacement } = useAccordion()

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
    <article id={ id } { ...rest }>
      <button
        ref={ panelRef }
        id={ headerId }
        style={ defaultStyles.header }
        onClick={ clickHandler }
        aria-controls={ bodyId }
        aria-expanded={ active }
      >
        { iconPlacement === 'left' && <IndicatorIcon active={ active } /> }
        <span style={{ ...defaultStyles.title }}>{ title }</span>
        { iconPlacement === 'right' && <IndicatorIcon active={ active } /> }
      </button>
      <div
        ref={ bodyElement } id={ bodyId } aria-labelledby={ headerId }
        style={{
          ...defaultStyles.body,
          // these styles control the body grow/shrink animation
          transition: active ? `max-height 250ms, opacity 500ms 100ms` : `max-height 500ms 100ms, opacity 250ms`,
          maxHeight: `${ height }px`,
          opacity: active ? 1 : 0,
        }}
      >
        <div hidden={ !active } style={{ ...defaultStyles.panelContents }}>
          { children }
        </div>
      </div>
    </article>
  )
}

