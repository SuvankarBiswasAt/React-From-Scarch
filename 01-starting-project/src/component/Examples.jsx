import { useState } from "react";
import TabComponent from "./TabComponent"
import { EXAMPLES } from "../data";

export default function Examples() {
  var [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(element) {
    setSelectedTopic(element);
    console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Example</h2>
      <menu>
        <TabComponent
          selected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TabComponent>
        <TabComponent
          selected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabComponent>
        <TabComponent
          selected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabComponent>
        <TabComponent
          selected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabComponent>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
