import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>

      <h1>Homepage</h1>

      <Link to="/login" >Login</Link>
      <Link to="/signup" >Sign Up</Link>
  




      </React.Fragment>
      );
  }
}
 
export default Homepage;