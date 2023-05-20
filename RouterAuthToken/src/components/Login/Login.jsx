import { useState } from "react";
import { useLocation } from "react-router-dom"

const initial_state = {
    email: "",
    password: ""
}

const Login = ({ loginUser, loginError }) => {
    const location = useLocation()
    const { state } = location
    console.log(location)

    const [formData, setFormData] = useState(initial_state)
    const changeInput = (ev) => {
        /*const valueInput = ev.target.value;
        const nameInput = ev.target.name;*/
        const { value, name } = ev.target;
        console.log(name, value)
        // uso spreadoperator para modificar el objeto del initial_state sin machacar las propiedades
        setFormData({ ...formData, [name]: value })
    }
    const submitForm = (ev) => {
        ev.preventDefault();
        console.log("se han enviado los datos");
        loginUser(formData, state ? state.prevRoute : null)
        setFormData(initial_state);
    }

    return (<form onSubmit={submitForm}>
        <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" onChange={changeInput} value={formData.email} />
        </label>
        <label htmlFor="pass">
            Contraseña
            <input type="password" name="password" id="pass" onChange={changeInput}
                value={formData.password} />
        </label>
        <div>
            <button type="submit">Log in</button>
        </div>

        {loginError ? <div style={{ color: 'red' }}>{loginError} </div> : null}
    </form>)
}
export default Login