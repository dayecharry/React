import { useContext } from "react"
import { userContext, color } from "../Context/userContext"
import products from "../../data/product.json"
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
function ProductDetail() {

    const user = useContext(userContext)

    //  variable enviada a traves de la url de la web
    const { id } = useParams();
    // busco el producto  en el array  que tengo en el JSON
    const findproduct = products.items.find((prod) => prod.id === id)
    console.log(findproduct)

    // valido si la variable findproduct tiene algun producto, y  pinto todo el detalle
    // si no ha encontrado el producto que se ha pasado por la url va a renderizar el componente  de error 404
    return findproduct ? (
        <>
            <h1>Componente Detalle Producto {id}</h1>
            <img src={findproduct.imageUrl} alt="" />
            <h3>{findproduct.name}</h3>
            <p>Precio: {findproduct.price}</p>
            <p>Descripcion : {findproduct.description}</p>
            <ul className="ul_size">
                {findproduct.sizes.map((size, i) => <li key={i}> <button> {size} </button></li>)}
            </ul>

            <h2>El usuario es {user.name}</h2>
        </>
    )
        :
        < NotFound />
}
export default ProductDetail;