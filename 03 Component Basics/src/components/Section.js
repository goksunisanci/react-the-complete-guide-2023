

const Section = ({title, ...props}) => {
return (
    <section {...props}>
        <h2>{title}</h2>
        {props.children}
    </section>
)
}

export default Section