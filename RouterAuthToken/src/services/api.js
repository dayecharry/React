import axios from 'axios';

const ls = JSON.parse(localStorage.getItem('token'));
export const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: {
    toString() {
      return `Bearer ${ls.token} `;
    },
  },
};
export const API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  timeout: 10000,
  headers: APIHeaders,
});

/*
localStorage.setItem('user', 'usuario'); // guardar el token de mi usuario
localStorage.getItem('user'); // obtener cual es el token de mi usuario
localStorage.removeItem('user'); // cierre de sesion, elimina el token
*/
