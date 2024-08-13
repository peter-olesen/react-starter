export const DynamicHeader =  ({ headerText, className }) => {

    return (
        <h1 className={className}>{headerText ? headerText : "Mangler headerText"}</h1>
    )
}