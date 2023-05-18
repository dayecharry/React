import { color } from "../Context/userContext"
import { useContext } from "react";
import ProductList from "../Product/ProductList";
function Home() {
    const theme = useContext(color);
    // console.log(theme)
    return <>
        <div className={theme ? "white" : "black"}>
            <h1>Componente Home</h1>
            <button>login</button>
            <button>Registro</button>
            <ProductList />
        </div>
    </>
}
export default Home;