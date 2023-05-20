import * as actions from '../actions/postsActions.js';

export const initialState = {
  posts: [],
  success: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    // se inicia la petición de datos a la API, y se define el state
    case actions.GET_POSTS:
      return { ...state, success: false };
    // ya se han obtenido los datos de la API, cambiamos success a true, y se guarda en post  la propiedad payload
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, success: true };
    default:
      return state;
  }
}
