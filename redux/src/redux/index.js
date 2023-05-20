import { combineReducers } from 'redux';
import postsReducer from './postsReducers';
import likeReduces from './postsReducers';

const objectReducers = combineReducers({
  posts: postsReducer,
  likes: likeReduces,
});

export default objectReducers;
