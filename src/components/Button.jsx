export const ButtonComponent = ({ id, className, buttonText, onClick, disabled }) => {

    return (
        <button
            id={id}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </button>
    )
}

export const varButton = ({action, size, theme, text}) => {
    return (
        <button>{text}</button>
    )
}