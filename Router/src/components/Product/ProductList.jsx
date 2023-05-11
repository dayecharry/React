import products from "../../data/product.json"
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
function ProductList() {

    const renderProductList = () => {
        return products.items.map((product) => <li key={product.id}>
            <Link to={`/producto/${product.id}`}>
                <ProductCard product={product} />
            </Link>
        </li>);
    }
    return <>
        <h1>Componente Detalle Producto</h1>
        <ul>{renderProductList()}</ul>
    </>
}
export default ProductList;