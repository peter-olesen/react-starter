export const DynamicHeader = ({ headerText, className }) => {

    return (
        <h1 className={className}>{headerText ? headerText : "Mangler headerText"}</h1>
    )
}

export const PropHeader = (props) => {
    return (
        <h1>{props.HeaderValue ? props.HeaderValue: "Text Needed"}</h1>
    )
}