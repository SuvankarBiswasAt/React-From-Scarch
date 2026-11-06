import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./component/Header.jsx";
import CoreConcept from "./component/CoreConcept.jsx";
import TabComponent from "./component/TabComponent.jsx";
import { useState } from "react";

function App() {
  var [selewctedTopic, setSelectedTopic] = useState('components');

  function handleSelect(element) {
    setSelectedTopic(element);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreItem) => (
              <CoreConcept key={coreItem.title} {...coreItem} />
            ))} 
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
