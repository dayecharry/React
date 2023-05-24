import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {

    const { id } = useParams();
    console.log(id);
    const [character, setCharacter] = useState({})

    const getDataCharacter = async () => {
        const resp = await axios.get("https://api.disneyapi.dev/character/" + id)
        console.log(resp.data)
        setCharacter(resp.data.data)
        /*const data = {
            name: "ariel",
            description: "peliroja"
        }
        setCharacter(data)*/

    }

    useEffect(() => {
        getDataCharacter()
    }, [])


    return (
        <div>
            <h3>Detalle</h3>
            <div>
                <h4>{character.name}</h4>
                <img src={character.imageUrl} alt={character.name} />
            </div>
        </div>
    )

}
export default CharacterDetail;