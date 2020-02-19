import React from 'react'
import PropTypes from 'prop-types'

function Post(props){

  function changePoints(number) {
    console.log(props.id);
    // updatePoints(number);
  }

  return (
    <div id={props.id}>
      <h3><span className="station">{props.title}</span></h3>
      <h4>By {props.name}</h4>
      <p><em>{props.content}</em></p>
      <p><span className="thumb-up" onClick={changePoints(1)}>👍</span><span className="thumb-down" onClick={changePoints(-1)}>👎</span></p>
      <hr/>
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Post
