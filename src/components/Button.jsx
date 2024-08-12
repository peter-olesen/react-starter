export const ButtonComponent = ({buttonText, onClick, disabled}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}