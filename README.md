# @mwatson/react-accessible-accordion

> Accessible accordion component for React

Accordion to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1,
https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html,
accessible accordions have the following required keyboard support:

- 🔑 SPACE & ENTER:
    + When focus is on the accordion header of a collapsed section, expands the section.
- 🔑 TAB:
    + Moves focus to the next focusable element.
    + All focusable elements in the accordion are included in the page Tab sequence.
- 🔑 SHIFT + TAB:
    + Moves focus to the previous focusable element.
    + All focusable elements in the accordion are included in the page Tab sequence.
- 🔑 DOWN ARROW:
    + When focus is on an accordion header, moves focus to the next accordion header.
    + When focus is on last accordion header, moves focus to first accordion header.
- 🔑 UP ARROW:
    + When focus is on an accordion header, moves focus to the previous accordion header.
    + When focus is on first accordion header, moves focus to last accordion header.
- 🔑 HOME:
    + When focus is on an accordion header, moves focus to the first accordion header.
- 🔑 END:
    + When focus is on an accordion header, moves focus to the last accordion header.

This accordion component satisfies the above requirements and thus is fully accessible. The package depends [React](https://reactjs.org/). Prior to version 1.1.0, [styled-components](https://styled-components.com/) was a dependency.

## Demo

See this CodeSandbox [demo](https://codesandbox.io/s/frosty-smoke-bqjbo).

## Install

```bash
npm i @mwatson/react-accessible-accordion
```

## Usage

Use the `Accordion` component to wrap `Panel` components and other components. `Panel` components must live inside the `Accordion` component, as it provides the [context](https://reactjs.org/docs/context.html) for the `Panel` components. In addition, the `Panel` components' `id`s must be unique.

```jsx
import React, { Component } from 'react'

import { Accordion, Panel } from '@mwatson/react-accessible-accordion'

class Example extends Component {
  render () {
    return (
      <main>
        
        <h1>React Accessible Accordion</h1>

        <Accordion>
          <Panel title="Lorem ipsum." id="lorem-ipsum">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quas nostrum facere non nobis.</p>
            <p>Tenetur odit incidunt quae deserunt quisquam, deleniti at maxime.</p>
          </Panel>
          <Panel title="Lorem ipsum dolor." id="lorem-ipsum-dolor">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum nesciunt velit labore, iste quae et possimus veritatis error numquam quasi vel eos.</p>
          </Panel>
          <Panel title="Lorem ipsum sit amet." id="lorem-ipsum-sit-amet">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur pariatur, expedita quos eaque deserunt facere reiciendis eligendi voluptatum asperiores, ullam voluptates! Officia numquam ea provident est, facere non repudiandae, sunt. Accusamus praesentium id quibusdam suscipit eius distinctio reprehenderit libero possimus a optio culpa aut quis quae, ipsa ratione nobis facere!</p>
          </Panel>
        </Accordion>

      </main>
    )
  }
}
```

### Icon Placement

The component ships with an icon (plus sign that animates to a minus sign) indicating the current state (expanded or collapsed) of the accordion panels. The `Accordion` component takes an `iconPlacement` prop that can have a value of `left` or `right` to render the indicator icon before the title or after, respectively. The default placement is `right`.

```
<Accordion iconPlacement="right">
```

## Contribute

This was created using [create-react-library](https://github.com/transitive-bullshit/create-react-library). Functionality is very limited because this was created for a specific project, so it just has what I need 😉. Adding the ability for more customization is on my todo list, though! Comments, suggestions, questions, and contributions are welcome.

## License

MIT © [mbwatson](https://github.com/mbwatson)
