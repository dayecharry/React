import { useEffect, useState } from "react"
import axios from "axios"

function PersonaList() {

    // const SERVER_URL = process.env.REACT_APP_SERVER_URL
    // console.log(SERVER_URL)
    const [listUser, setListUser] = useState([])

    const mapeoHtml = (data) => {
        return data.map((e) => {
            return <li key={e._id}> {e.name} / {e.city}
                <ol>
                    {e.productos.map((product) =>
                        <li>{product.nombre} - {product.precio}</li>)}
                </ol>
            </li>
        })
    }
    useEffect(() => {
        /* fetch("http://localhost:3000/personas")
             .then((response) => response.json())
             .then(data => {
                 console.log(data)
                 setListUser(data)
             })*/
        // es otra forma de hacer peticiones al servidor  un poco mas corta
        axios("http://localhost:3000/personas")
            .then((res) => {
                setListUser(res.data)
            }, (error) => {
                console.log(error)
            }
            )
    }, [])
    return (
        <>
            <h2>Listado persona</h2>
            <ul> {mapeoHtml(listUser)}</ul>
        </>)
}
export default PersonaList