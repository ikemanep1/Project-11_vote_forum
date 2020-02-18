import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  return (
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post name={post.name}
        title={post.title}
        content={post.content}
        key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  ostList: PropTypes.array
};

export default PostList;
