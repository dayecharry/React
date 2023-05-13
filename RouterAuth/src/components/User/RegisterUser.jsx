import { useState } from "react";

const initial_state = {
    email: "",
    password: "",
    role: "",
    name: ""
}
function RegisterUser({ registernewUser, registerError }) {
    const [newUser, setNewUser] = useState(initial_state)
    const changeInput = (ev) => {
        const { id, value } = ev.target;
        setNewUser({ ...newUser, [id]: value })
    }
    const submitForm = (ev) => {
        ev.preventDefault();
        registernewUser(newUser)

    }
    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor="">
                    Email
                    <input type="email" name="email" id="email" value={newUser.email} onChange={changeInput} />
                </label>
                <label htmlFor="">
                    Password
                    <input type="password" name="password" id="password" value={newUser.password} onChange={changeInput} />
                </label>
                <label htmlFor="">
                    Nombre
                    <input type="name" name="name" id="name" value={newUser.name} onChange={changeInput} />
                </label>
                <select name="role" id="role" value={newUser.role} onChange={changeInput}>
                    <option value="">Seleccione</option>
                    <option value="admin">Admin</option>
                    <option value="client">Cliente</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
            {registerError ? <p style={{ color: "red" }}>{registerError}</p> : null}
        </>

    )
}
export default RegisterUser;