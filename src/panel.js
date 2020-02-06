import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ExpandIcon } from './expand-icon'

const PanelWrapper = styled.div`
    background-color: #eee;
    margin-bottom: 1rem;
`

const Title = styled.h3`
    margin: 0;
    padding: 0 1rem;
    flex: 1;
    font-weight: normal;
`

const HeaderButton = styled.button`
    width: 100%;
    text-align: left;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    cursor: pointer;
    transition: background-color 250ms, border-color 250ms;
    background-color: #eee;
    border: 1px solid;
    border-color: #eee;
    &:hover, &:focus {
        background-color: #ddd;
        border-color: #ccc;
    }
`

const PanelHeader = styled.h5`
    margin: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 250ms;
    background-color: #ccc;
`

const IconWrapper = styled.span`
    padding: 1rem;
`

const PanelBody = styled.div`
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ddd;
    transition: ${ props => props.active
        ? `max-height 250ms, opacity 500ms 100ms`
        : `max-height 500ms 100ms, opacity 250ms`
    };
    max-height: ${ props => props.height }px;
    opacity: ${ props => props.active ? 1 : 0 };
`

const PanelContents = styled.div`
    padding: 1rem;
`

export const Panel = ({ active, focused, id, title, children, ...rest }) => {
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
        <PanelWrapper id={ id } { ...rest }>
            <PanelHeader>
                <HeaderButton id={ headerId } aria-controls={ bodyId } aria-expanded={ active }ref={ panelRef }>
                    <Title>{ title }</Title>
                    <IconWrapper>
                        <ExpandIcon size={ 12 } active={ active } color={ active ? 'crimson' : '#333' } />
                    </IconWrapper>
                </HeaderButton>
            </PanelHeader>
            <PanelBody
                active={ active } height={ height } ref={ bodyElement }
                id={ bodyId } aria-labelledby={ headerId }
            >
                <PanelContents hidden={ !active }>
                    { children }
                </PanelContents>
            </PanelBody>
        </PanelWrapper>
    )
}

