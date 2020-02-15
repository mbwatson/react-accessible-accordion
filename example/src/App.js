import React, { Component } from 'react'
import { Accordion, Panel } from '@mwatson/react-accessible-accordion'
import { requirements } from './panel-data'

const panelStyles = {
    header: {
        backgroundColor: 'beige',
        border: '1px solid darkcyan',
    },
    title: {
        color: 'darkslategray',
        fontSize: '14pt',
        letterSpacing: '2px',
    },
    body: {
        borderWidth: '0 1px 1px 1px',
        borderStyle: 'solid',
        borderColor: 'darkcyan',
        padding: '1rem',
        background: 'linear-gradient(160deg, white, aliceblue)',
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

                <Accordion styles={ panelStyles }>
                    {
                        requirements.map(({ title, id, actions}) => (
                            <Panel key={ id } id={ id } title={ title }>
                                <ul>{ actions.map((action, i) => <li key={ i }>✔ { action }</li>) }</ul>
                            </Panel>
                        ))
                    }
                </Accordion>

            </main>
        )
    }
}
