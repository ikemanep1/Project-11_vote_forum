import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  const introStyles = {
    backgroundImage: "url('city.jpg')",
    height: "400px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    marginBottom: "32px",
    margin: "5%",
    textAlign: "center",
    fontFamily: "fantasy",
    color: "#e65c00",
    fontSize:"35px",
    margin: "0",
    borderBottom: "3px solid red"
  }
  console.log(props.postList);
  return (
    <div>
    <div style={introStyles}>
    </div>
    <div>
      {props.postList.map((post) =>
        <Post name={post.name}
        title={post.title}
        content={post.content}
        key={post.id}
        id={post.id}
        points={post.points}/>
      )}
    </div>
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
