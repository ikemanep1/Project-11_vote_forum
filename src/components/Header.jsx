import React from 'react'
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <h1 className="color-toggle">Vote for'em!</h1>
        <Link to="/">Home</Link> | <Link to="/newpost">Contribute!</Link>
      </div>
    )
  }

  export default Header
