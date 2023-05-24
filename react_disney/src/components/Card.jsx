function Card({ item }) {
    return (
        <article>
            <img src={item.imageUrl} alt="" />
            <h3>{item.name}</h3>
        </article>
    )

}
export default Card;