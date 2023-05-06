import { useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import CardPreview from './CardPreview';

function App() {
  const initial = {
    name: '',
    lastname: '',
  };

  const [person, setPerson] = useState(initial);
  const [allPerson, setAllPerson] = useState([]);

  const resetForm = () => {
    setPerson(initial);
  };

  const addNewPerson = (newPerson) => {
    setAllPerson([...allPerson, newPerson]);
    console.log(allPerson);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          person={person}
          setPerson={setPerson}
          resetForm={resetForm}
          addNewPerson={addNewPerson}
        />
        <CardPreview person={person} />
      </header>
    </div>
  );
}

export default App;
