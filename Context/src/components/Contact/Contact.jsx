import { useContext } from "react"
import { userContext, color } from "../Context/userContext"
const Contact = () => {

    const user = useContext(userContext);
    return (

        <>
            <p>El usuario es {user.name} </p>
            <form action="">
                <label htmlFor=""> Nombre</label>
                <input type="text" /> <br />
                <label htmlFor=""> Comentario</label>
                <textarea></textarea>
            </form>
        </>
    )

}
export default Contact