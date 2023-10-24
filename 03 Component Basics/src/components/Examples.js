import { useState } from "react"
import TabButton from "./UI/TabButton"
import { EXAMPLES } from "../data"
import "./Examples.css"
import Section from "./Section"
import Tabs from "./Tabs"

const Examples = () => {

    const [selectedTopic, setSelectedTopic] = useState()

    const tabButtonClickHandler = (selectedButton) => {
        setSelectedTopic(selectedButton)
        console.log(selectedButton + " clicked")
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === "components"} onClick={() => tabButtonClickHandler("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => tabButtonClickHandler("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => tabButtonClickHandler("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => tabButtonClickHandler("state")}>State</TabButton>
                    </>
                }>
                {!selectedTopic && <p>Please select a topic.</p>}
                {selectedTopic && (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                )}
            </Tabs>
        </Section>
    )
}

export default Examples