import ConceptItem from "./ConceptItem";

const Concepts = (props) => {
    const rows = []
    for (let item of props.items) {
        rows.push(<ConceptItem title={item.title} image={item.image} description={item.description}></ConceptItem>)
    }

    return (
        <ul id="concepts">
            {rows}
        </ul>
    )

}

export default Concepts;