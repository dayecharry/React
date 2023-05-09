import { useEffect, useState } from "react";


function App() {
  const [character, setCharacter] = useState({})
  const [number, setNumber] = useState(0)
  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + number)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setCharacter(data)
      })
  }, [number])
  //[] --> se ejecuta lo de dentro del useEffect 1 sola vez cuando carga la web
  //[varEstado] --> se va a ejecutar lo dentro del useEffect cada vez  que esa variable de estado se modifique
  //number =number +1 --> number++

  return (
    <>
      <button onClick={() => { setNumber(number + 1) }}> + </button>
      <div>
        <h3>{character.name}</h3>
        <p>{character.height} {character.eye_color}</p>
      </div>
    </>
  );
}

export default App;


