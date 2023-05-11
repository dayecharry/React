import products from "../../data/product.json"
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
function ProductList() {
    // funcion  que recorre el array de los producto y mapea un <li> por cada elemento del array 
    const renderProductList = () => {
        return products.items.map((product) => <li key={product.id}>
            <Link to={`/producto/${product.id}`}>
                {/* hemos creado un componente que va a renderizar cada  `card`del producto, por ello le  enviamos por props  el objeto a renderizar */}
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