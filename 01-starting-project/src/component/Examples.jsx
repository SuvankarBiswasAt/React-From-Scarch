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

  var options = ['components','jsx','props','state']

  return (
    <Section title="Example" id="examples">
      <Tabs
        buttons={
          options.map(ele => {
            return (
              <TabComponent 
              selected={selectedTopic === ele}
               onClick={() => handleSelect(ele)}>
               {ele.toUpperCase()}
             </TabComponent>
            )
          })
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
