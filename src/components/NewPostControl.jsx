import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewPost from './NewPost';
import PropTypes from "prop-types";

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.confirmification = this.confirmification.bind(this);
  }

  confirmification(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPost onPostSubmit={this.props.onPostSubmit}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onConfirmification={this.confirmification}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onPostSubmit: PropTypes.func
};

export default NewPostControl;
