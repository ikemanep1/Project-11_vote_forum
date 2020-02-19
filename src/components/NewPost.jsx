import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPost(props) {
  let _name = null;
  let _title = null;
  let _content = null;
  let _points = null;


function newPostSubmit(event) {
  event.preventDefault();
  props.onPostSubmit({name: _name.value, title: _title.value, content: _content.value, id: v4(), points: 0})
  _name.value = '';
  _title.value = '';
  _content.value = '';
}

return (
  <div>
    <form onSubmit={newPostSubmit}>
      <input
      type='text'
      id='name'
      placeholder='your name'
      ref={(input) => {_name = input;}}/>
      <input
      type='text'
      id='title'
      placeholder='your title'
      ref={(input) => {_title = input;}}/>
      <textarea
      type='text'
      id='content'
      placeholder='your content'
      ref={(input) => {_content = input;}}/>
      <button type='submit'>Help!</button>
    </form>
  </div>
);
}

NewPost.propTypes = {
  onPostSubmit: PropTypes.func
};

export default NewPost;
