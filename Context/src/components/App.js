import '../styles/App.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { userContext, color } from './Context/userContext';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound';
import ProductDetail from './Product/ProductDetail';
import PersonaList from './Persona/PersonaList';

function App() {
  const userValue = { name: 'MariCarmen', apellido: 'perez' };

  const [theme, setTheme] = useState(false);

  // funcion manejadroa del evento del checkbox
  const handleClick = (ev) => {
    setTheme(ev.target.checked);
  };

  return (
    <div className="App-header">
      <form action="">
        <input
          type="checkbox"
          name="colorTheme"
          onClick={handleClick}
          checked={theme}
        />
      </form>

      <color.Provider value={theme}>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/personas">Listado persona</Link>
            </li>
            <li>
              {/*Enlaces para redireccionar a las ruta definida en <Route> */}
              <Link to="/contacto">Contacto </Link>
            </li>
            <li>
              {/* Esto es una ruta dinamica, donde 123, puede ser un valor variable */}
              <Link to="/producto/123">detalle Producto </Link>
            </li>
          </ul>
        </nav>
        {/* http://localhost:3000/producto/001*/}

        <userContext.Provider value={userValue}>
          <Routes>
            <Route path="/" element={<Home />} />{' '}
            {/* esta seria una ruta estática porque su valor se mantiene siempre igual*/}
            <Route path="/contacto" element={<Contact />} />
            <Route path="/personas" element={<PersonaList />} />
            <Route path="/producto/:id" element={<ProductDetail />} />{' '}
            {/*esta ruta contiene una parte variable (:id), puedes ponerle cualquier nombre */}
            <Route path="*" element={<NotFound />} />{' '}
            {/* cuando se trate de acceder a una URL  que no esta definida en los <Route> se renderizara el componente Not Found que tiene un mensaje de ruta no encontrada*/}
          </Routes>
        </userContext.Provider>
      </color.Provider>
    </div>
  );
}

export default App;
