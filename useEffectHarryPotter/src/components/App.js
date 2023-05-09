import { useEffect, useState } from 'react';
import '../styles/App.css';
import ListCharacter from './ListCharacter';

function App() {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState('Gryffindor');
  /*useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        console.log(data);
      });
  }, []);*/

  const getDataApi = async (house) => {
    const res = await fetch(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    const resJson = await res.json();
    setCharacters(resJson);
  };

  useEffect(() => {
    getDataApi(house);
  }, [house]);

  return (
    <>
      <div>
        <select name="" id="" onChange={(ev) => setHouse(ev.target.value)}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>
      <div>
        <ListCharacter characters={characters}></ListCharacter>
      </div>
    </>
  );
}

export default App;
