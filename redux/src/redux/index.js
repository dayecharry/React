import { combineReducers } from 'redux';
import postsReducer from './postsReducers';

const objectReducers = combineReducers({
  posts: postsReducer,
});

export default objectReducers;
