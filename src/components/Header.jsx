import React from 'react'
import { Link } from 'react-router-dom';

function Header(props){
  var headerStyle = {
    backgroundColor: '#003249',
    textAlign: 'center',
    color: '#CCDBDC',
    paddingBottom: '10px',
    border: '5px solid #ff0000'
  }
  var header = {
    backgroundColor: '#003249',
    textAlign: 'center',
    color: '#CCDBDC',
    paddingBottom: '10px',
  }
  return (
    <div style={headerStyle}>
      <h1>Vote For 'Em!</h1>
        <Link to="/" style={header}>Home</Link> | <Link to="/newpost" style={header}>Contribute!</Link>
      </div>
    )
  }

  export default Header
