export const FavoriteFoods = (props) => {

    return (
        <p>{props.myFavorites.join(', ')}</p>
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