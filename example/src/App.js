import React, { Component } from 'react'
import { Accordion, Panel } from '@mwatson/react-accessible-accordion'
import { requirements } from './panel-data'

const panelStyles = {
    header: {
        backgroundColor: 'wheat',
        border: '1px solid coral',
    },
    title: {
        color: '#444',
        letterSpacing: '2px',
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
            <main>
                <h1 className="title">Accessible Accordion Example</h1>

                <p>
                    Accordiong to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1, which can be found
                    at <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html" target="_blank"
                    rel="noopener noreferrer">https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html</a>,
                    accessible accordions have the following keyboard support:
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

            </main>
        )
    }
}
