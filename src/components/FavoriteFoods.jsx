export const FavoriteFoods = (props) => {

    return (
        <p>{props.myFavorites.join(', ')}</p>
    )
}

// Props mapping
export const PropsFoods = (props) => {
    return (
        <>
            <p>My Favorite Foods</p>
            <ul>
                {props.favorites.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}

export const Foods = ({favorites}) => {
    return (
        <>
            <p>My Favorite Foods</p>
            <ul>
                {favorites.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}