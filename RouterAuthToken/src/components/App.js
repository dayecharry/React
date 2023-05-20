import '../styles/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import NotFound from './NotFound';
import { useState } from 'react';
import Profile from './Profile/Profile';
import AuthRoute from './AuthRoute/AuthRoute';
import Check from './Check';
import { API } from '../services/api';

const userList = [];
function App() {
  const navigate = useNavigate();
  // primer estado del user null, aun no se  define

  const ls = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState(ls);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const loginUser = (formData, prevRoute) => {
    // Hago el login con los datos que se encuentran en la BD
    API.post('/user/login', formData).then((res) => {
      console.log(res.data);
      setUser(res.data.userInfo);
      localStorage.setItem('token', JSON.stringify(res.data));
    });
  };

  const logoutUser = () => {
    setUser(null);
    // ademas de llevar mi usuario a null, debo borrar el LocalStorage
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div className="App-header">
      <NavBar user={user} logoutUser={logoutUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <AuthRoute user={user} component={<Profile user={user} />} />
          }
        />

        <Route
          path="/login"
          element={<Login loginUser={loginUser} loginError={loginError} />}
        />
        <Route path="/check" element={<Check user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
