import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Characters() {
    // useState,  monitoriza uan variable y ella cambie re-renderiza el componente
    //useEffect controla cuantas veces se ejecuta un bloque de código.
    const [characters, setCharacters] = useState([])
    const [actualPage, setActualPage] = useState(1);
    const getdataApi = async (actualPage) => {
        const response = await axios.get(`https://api.disneyapi.dev/character?page=${actualPage}&pageSize=50`)
        setCharacters(response.data.data)
        //console.log(response.data)
    }

    const renderList = () => {
        return characters.map((character) => {
            return (<li key={character._id}>
                <Link to={"/characters/" + character._id}>
                    <Card item={character} />
                </Link>
            </li >)
        })
    }
    useEffect(() => {
        getdataApi(actualPage);
    }, [actualPage])
    //  se va a ejecutar cada vez que cambie la variable actualPage
    return (
        <>
            <h2>Listado de personajes</h2>
            <Pagination setActualPage={setActualPage} actualPage={actualPage} />
            <ul>
                {renderList()}
            </ul>
        </>
    )

}
export default Characters;