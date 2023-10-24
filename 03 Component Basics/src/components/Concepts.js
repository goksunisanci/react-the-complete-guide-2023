import ConceptItem from "./ConceptItem";
import { CONCEPTS } from "../data";
import Section from "./Section";
import "./Concepts.css"

const Concepts = () => {
    return (
        <Section id="concepts" title="Concepts">
            <ul>
                {CONCEPTS.map((item) => <ConceptItem key={item.title} title={item.title} image={item.image} description={item.description}></ConceptItem>)}

            </ul>
        </Section>
    )

}

export default Concepts;