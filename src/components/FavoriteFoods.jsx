export const FavoriteFoods = (props) => {

    return (
        <p>{props.myFavorites.join(', ')}</p>
    )
}