import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you sure that you want to add this post? Please review our guidelines.</p>
      <button onClick={props.onConfirmification}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmification: PropTypes.func
};

export default ConfirmationQuestions;
