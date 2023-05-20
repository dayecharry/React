import { Link } from "react-router-dom"

const NavAdmin = () => {
    return (<>
        <li>
            <Link to="/register">Registrar usuario</Link>
        </li>
        <li>
            <Link to="/delete">Eliminar usuario</Link>
        </li>
    </>)
}
export default NavAdmin