import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PostList from './components/PostList'
import Error404 from './components/Error404'
import NewPostControl from './components/NewPostControl'
import NewPost from './components/NewPost'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTotal: []
    };
    this.newPost = this.newPost.bind(this);
  }

  newPost(post){
    var newPostTotal = this.state.postTotal.slice();
    newPostTotal.push(post);
    this.setState({postTotal: newPostTotal});
  }

  // updatePoints(number) {
  //   console.log(number);
  // }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><PostList postList={this.state.postTotal} />} />
      <Route path='/newpost' render={()=><NewPostControl
        onPostSubmit={this.newPost} />} />
      <Route component={Error404} />
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default App;
