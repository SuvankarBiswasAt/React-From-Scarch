import { useState } from "react";
import TabComponent from "./TabComponent";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  var [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(element) {
    setSelectedTopic(element);
    console.log(selectedTopic);
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        buttons={
          <>
            <TabComponent
              selected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabComponent>
            <TabComponent
              selected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabComponent>
            <TabComponent
              selected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabComponent>
            <TabComponent
              selected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabComponent>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
