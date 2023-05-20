import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataApi } from '../actions/postsActions';

const Home = ({ dispatch, posts, success }) => {
  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);
  const renderPost = () => {
    if (success) {
      return posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      });
    }
  };
  return (
    <>
      <h2>Listado de posts</h2>
      {renderPost()}
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  success: state.posts.success,
});
export default connect(mapStateToProps)(Home);
