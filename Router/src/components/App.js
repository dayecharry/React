import '../styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound';
import ProductDetail from './Product/ProductDetail';

function App() {
  return (
    <div className="App-header">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
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
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        {/* esta seria una ruta estática porque su valor se mantiene siempre igual*/}
        <Route path="/contacto" element={<Contact />} />
        <Route path="/producto/:id" element={<ProductDetail />} />{' '}
        {/*esta ruta contiene una parte variable (:id), puedes ponerle cualquier nombre */}
        <Route path="*" element={<NotFound />} />{' '}
        {/* cuando se trate de acceder a una URL  que no esta definida en los <Route> se renderizara el componente Not Found que tiene un mensaje de ruta no encontrada*/}
      </Routes>
    </div>
  );
}

export default App;
