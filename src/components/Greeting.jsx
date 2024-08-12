export const Greeting = ({ name, className }) => {
    return (
        <>
        <h2 className={className}>Hello there, {name}!</h2>
        <hr />
        </>
    )
}