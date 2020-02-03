# react-accessible-accordion

> Accessible accordion component for React

Accordion to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1,
https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html,
accessible accordions have the following required keyboard support:

- 🔑 SPACE & ENTER:
    + ⭐ When focus is on the accordion header of a collapsed section, expands the section.
- 🔑 TAB:
    + ⭐ Moves focus to the next focusable element.
    + ⭐ All focusable elements in the accordion are included in the page Tab sequence.
- 🔑 SHIFT + TAB:
    + ⭐ Moves focus to the previous focusable element.
    + ⭐ All focusable elements in the accordion are included in the page Tab sequence.
- 🔑 DOWN ARROW:
    + ⭐ When focus is on an accordion header, moves focus to the next accordion header.
    + ⭐ When focus is on last accordion header, moves focus to first accordion header.
- 🔑 UP ARROW:
    + ⭐ When focus is on an accordion header, moves focus to the previous accordion header.
    + ⭐ When focus is on first accordion header, moves focus to last accordion header.
- 🔑 HOME:
    + ⭐ When focus is on an accordion header, moves focus to the first accordion header.
- 🔑 END:
    + ⭐ When focus is on an accordion header, moves focus to the last accordion header.

This accordion component is fully accessible and animated. The package uses and thus depends on [React](https://reactjs.org/, of course, and [styled-components](https://styled-components.com/).

## Install

```bash
npm i react-accessible-accordion
```
## Development

An example lives in the `./example` directory. This is a React application bootsrapped with create-react-app. To develop, we'll need to link the example to the project source.

First, execute `sudo npm link` from the project root. Then execute `npm link ../` from the `./example` directory. Tells the example React app to use the local version of `react-accessible-accordion` instead of installing it from npm. Next we want both projects (`react-accessible-accordion` _and_ the example app) to use the same installation of React, so we'll link the project to the example's version of React with `npm link ./example/node_modules/react/` from the project root.

To see the example, execute `npm start` from the `./example` directory. Now develop the `react-accessible-accordion` package as needed, and rebuild with `npm run build` from the project root to see the changes reflected in the example app.

## Usage

Use the `Accordion` component to wrap `Panel` components. Children of `Accordion` must be `Panel` components--just supply unique `id`s of the `Panel` components.

```jsx
import React, { Component } from 'react'

import { Accordion, Panel } from 'react-accessible-accordion'

class Example extends Component {
  render () {
    return (
      <main>
        
        <h1>React Accessible Accordion</h1>

        <Accordion>
          <Panel title="Lorem ipsum." id="lorem-ipsum">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quas nostrum facere non nobis tenetur odit incidunt quae deserunt quisquam, deleniti at maxime.</p>
            </div>
          </Panel>
          <Panel title="Lorem ipsum dolor." id="lorem-ipsum-dolor">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum nesciunt velit labore, iste quae et possimus veritatis error numquam quasi vel eos.</p>
            </div>
          </Panel>
          <Panel title="Lorem ipsum sit amet." id="lorem-ipsum-sit-amet">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur pariatur, expedita quos eaque deserunt facere reiciendis eligendi voluptatum asperiores, ullam voluptates! Officia numquam ea provident est, facere non repudiandae, sunt. Accusamus praesentium id quibusdam suscipit eius distinctio reprehenderit libero possimus a optio culpa aut quis quae, ipsa ratione nobis facere!</p>
            </div>
          </Panel>
        </Accordion>

      </main>
    )
  }
}
```

## License

MIT © [mbwatson](https://github.com/mbwatson)
