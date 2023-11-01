import classes from "./Card.module.css"

const Card = (props) => {
    const allClasses = classes.card + " " + (typeof props.className !== "undefined" ? props.className : "")
    return (
        <div className={allClasses}>{props.children}</div>
    )
};

export default Card;