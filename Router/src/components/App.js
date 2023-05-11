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
            <Link to="/contacto">Contacto </Link>
          </li>
          <li>
            <Link to="/producto/123">detalle Producto </Link>
          </li>
        </ul>
      </nav>

      {/* http://localhost:3000/producto/001*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
