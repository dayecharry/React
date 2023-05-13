import '../styles/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import NotFound from './NotFound';
import { useState } from 'react';
import Profile from './Profile/Profile';
import RegisterUser from './User/RegisterUser';
import AuthRoute from './AuthRoute/AuthRoute';

/*
AUTENTICACION, vamos a crear rutas privadas y compartir los datos de un usuario en toda la app

0.- Crear un componente de NavBar
1.- Formulario de Login
2.- Crear un array de datos de usuarios para luego hacer la validación
3.- Comprobar si los datos del componente Login coinciden con alguno de los usuarios del Array
    (EN LA VIDA REAL ESTO DE HACE A NIVEL DE BD)
4.- Si coinciden los datos, creamos al usuario, seteamos  a la variable 'user' que sera un useState dentro de la APP. (TOKEN)
4.- Crear un componente  que va a validar todas las rutas privadas
5.- Crear el componente Profile, como ruta privada, con los datos del user
6.- Crear boton de Logout, para borrar el usuario guardado en el estado
7.- Crear un componente de Registro, y añadir al array de usuarios los nuevos datos. 
(RegisterUser, Modificar el NavBar dependiendo del rol de usuario que inicie sesion, )
*/
const userList = [
  {
    email: 'anacleta@upgrade.com',
    password: '123456',
    name: 'Ana',
    role: 'admin',
  },
  {
    email: 'perensejo@upgrade.com',
    password: '987456',
    name: 'Pablo',
    role: 'client',
  },
];
function App() {
  const navigate = useNavigate();
  // primer estado del user null, aun no se  define
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const loginUser = (formData, prevRoute) => {
    const existsUser = userList.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (existsUser) {
      // segundo estado del user, informacion del usuario logado
      setUser(existsUser);
      setLoginError('');
      // en caso que el login se haya realizado a partir de una ruta protegida a la cual no se tenia acceso, un vez has iniciado sesion devuelvete a la ruta protegida y sino ve al home
      navigate(prevRoute || '/');
    } else {
      // tercer estado del user false, ha tratado de hacer login y no pudo
      setUser(false);
      setLoginError('Usuario o contraseña incorrecta');
    }
  };

  const registernewUser = (newUser) => {
    const userFind = userList.find((user) => newUser.email === user.email);
    if (!userFind) {
      userList.push(newUser);
      console.log(userList);
      navigate('/');
    } else {
      setRegisterError('El email no puede estar repetido');
    }
  };
  const logoutUser = () => {
    setUser(null);
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
          path="register"
          element={
            <AuthRoute
              user={user}
              component={
                <RegisterUser
                  registernewUser={registernewUser}
                  registerError={registerError}
                />
              }
            />
          }
        />
        <Route
          path="/login"
          element={<Login loginUser={loginUser} loginError={loginError} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
