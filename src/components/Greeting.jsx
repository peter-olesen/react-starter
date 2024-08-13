export const Greeting = ({ name, className }) => {
    return (
        <>
        <h2 className={className}>Hello there, {name}!</h2>
        <hr />
        </>
    )
}

export const NewGreet = (props) => {
    return (
        <h3>Welcome to the land of the living, {props.YourName}! {props.anyValue}</h3>
    )
}