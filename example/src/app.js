import React from "react";
import { Accordion, Panel } from "@mwatson/react-accessible-accordion";
import { requirements } from "./panel-data";

const panelStyle = {
  header: {
    border: '2px dashed crimson',
  },
}

export const App = () => {
  return (
    <main>
      <h1>React Accessible Accordion Example</h1>

      <p>
        Accordiong to Accordion Design Pattern in WAI-ARIA Authoring Practices
        1.1, which can be found at{" "}
        <a
          href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
        </a>
        , accessible accordions have the following keyboard support:
      </p>

      <hr />

      <Accordion>
        {requirements.map(({ title, id, actions }) => (
          <Panel key={id} id={id} title={title}>
            <div style={{ border: '1px solid crimson' }}>
              <ul>
                {actions.map((action, i) => (
                  <li key={i}>✔ {action}</li>
                ))}
              </ul>
            </div>
          </Panel>
        ))}
      </Accordion>
    </main>
  );
}
