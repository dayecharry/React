import { Link } from "react-router-dom"

const NavClient = () => {
    return (<>
        <li>
            <Link to="/update">Modificar datos</Link>
        </li>
        <li>
            <Link to="/citas">Ver mis citas</Link>
        </li>
    </>)
}
export default NavClient