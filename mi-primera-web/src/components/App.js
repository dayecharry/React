import '../styles/App.css';
import Button from './Button';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Info from './Info';

function App() {
  const person = {
    name: 'Pepito',
    lastname: 'Ruiz',
  };
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <h1>Titulo de mi web</h1>
        <Subtitle loquequiera="el lunes 15 no hay clases" />
        <Subtitle loquequiera="en agosto no trabajo" />
        <Button titulo="Boton rojo" />
        <Button titulo="Boton verde" />

        <Info person={person} />
      </header>
    </div>
  );
}

export default App;
