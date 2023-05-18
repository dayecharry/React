const ProductCard = ({ product }) => {
    return (
        <article>
            <img src={product.imageUrl} alt="" />
            <h3>{product.name}</h3>
        </article>
    )
}
export default ProductCard;