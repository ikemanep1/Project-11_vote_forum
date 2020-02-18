import React from 'react'
import PropTypes from 'prop-types'

function Post(props){
  return (
    <div>
      <h3><span className="station">{props.name}</span> - {props.title}</h3>
      <p><em>{props.content}</em></p>
      <hr/>
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default Post
