import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  const texto = 'esto es el hijo del home';
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home> {texto} </Home>}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/characters/:id" element={<CharacterDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
