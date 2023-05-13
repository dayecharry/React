import { Navigate, useLocation } from "react-router-dom"
const AuthRoute = ({ user, component }) => {
    const location = useLocation();

    // si existe el usuario, retorno el componente que corresponde a la web que quiero renderizar

    if (user) return component;
    // en caso que el usuario  sea un  valor falsy, me redirige al login
    if (!user) return <Navigate to="/login" state={{ prevRoute: location.pathname }} />

    //falsy--> null, undefined, 0, "", false 
}
export default AuthRoute