import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';

class Topic extends React.Component {
  state = {}
  render() {
    return (
      <React.Fragment>

        <h1>A Topic</h1>


        <Link to="/">Home</Link>
      


      </React.Fragment>
    )
  }
}

export default Topic;