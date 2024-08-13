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