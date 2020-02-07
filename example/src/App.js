import React, { Component } from 'react'
import styled from 'styled-components'
import { Accordion, Panel } from '@mwatson/react-accessible-accordion'
import { requirements } from './requirements'

const Main = styled.main`
    width: calc(100% - 4rem);
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align: center;
    margin: 2rem 0;
`

const panelStyles = {
    header: {
        backgroundColor: 'wheat',
        border: '1px solid coral',
    },
    title: {
        color: '#444',
        fontWeight: 'bold',
    },
    body: {
        borderWidth: '0 1px 1px 1px',
        borderStyle: 'solid',
        borderColor: 'coral',
    },
}

export default class App extends Component {
    render () {
        return (
            <Main>
                <Title>Accessible Accordion</Title>

                <p>
                    Accordion to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1, which can be found
                    at <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html" target="_blank"
                    rel="noopener noreferrer">https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html</a>,
                    requires that accessible accordions have the support for the following keys:
                </p>

                <Accordion>
                    {
                        requirements.map(({ title, id, actions}) => (
                            <Panel key={ id } title={ title } id={ id } styles={ panelStyles }>
                                <ul>
                                    { actions.map((action, i) => <li key={ i }>✔ { action }</li>) }
                                </ul>
                            </Panel>

                        ))
                    }
                </Accordion>

            </Main>
        )
    }
}
