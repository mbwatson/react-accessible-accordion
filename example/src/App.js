import React, { Component } from 'react'
import styled from 'styled-components'
import { Accordion, Panel } from '@mwatson/react-accessible-accordion'

const Main = styled.main`
    width: 90%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align: center;
    margin: 2rem 0;
`

const Paragraph = styled.p`
    line-height: 2;
`

const List = styled.ul`
    list-style-type: none;
`

const ListItem = styled.li`
    line-height: 2;
`

export default class App extends Component {
    render () {
        return (
            <Main>
                <Title>Accessible Accordion</Title>
                    <Paragraph>
                        Accordion to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1, which can be found
                        at <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html" target="_blank"
                        rel="noopener noreferrer">https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html</a> accessible
                        accordions have the following required keyboard support:
                    </Paragraph>


                <Accordion>
                    <Panel title="SPACE & ENTER" id="space-and-enter">
                        <List>
                            <ListItem>✔ When focus is on the accordion header of a collapsed section, expands the section.</ListItem>
                            <ListItem>⭐ When focus is on the accordion header of an expanded section, collapses the section.</ListItem>
                        </List>
                    </Panel>
                    <Panel title="TAB" id="tab">
                        <List>
                            <ListItem>✔ Moves focus to the next focusable element.</ListItem>
                            <ListItem>✔ All focusable elements in the accordion are included in the page Tab sequence.</ListItem>
                         </List>
                    </Panel>
                    <Panel title="SHIFT + TAB" id="shift-plus-tab">
                        <List>
                            <ListItem>✔ Moves focus to the previous focusable element.</ListItem>
                            <ListItem>✔ All focusable elements in the accordion are included in the page Tab sequence.</ListItem>
                         </List>
                    </Panel>
                    <Panel title="DOWN ARROW" id="down-arrow">
                        <List>
                            <ListItem>✔ When focus is on an accordion header, moves focus to the next accordion header.</ListItem>
                            <ListItem>✔ When focus is on last accordion header, moves focus to first accordion header.</ListItem>
                         </List>
                    </Panel>
                    <Panel title="UP ARROW" id="up-arrow">
                        <List>
                            <ListItem>✔ When focus is on an accordion header, moves focus to the previous accordion header.</ListItem>
                            <ListItem>✔ When focus is on first accordion header, moves focus to last accordion header.</ListItem>
                         </List>
                    </Panel>
                    <Panel title="HOME" id="home">
                        <List>
                            <ListItem>✔ When focus is on an accordion header, moves focus to the first accordion header.</ListItem>
                        </List>
                    </Panel>
                    <Panel title="END" id="end">
                        <List>
                            <ListItem>✔ When focus is on an accordion header, moves focus to the last accordion header.</ListItem>
                        </List>
                    </Panel>
                </Accordion>

            </Main>
        )
    }
}
