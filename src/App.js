import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Topics from './Topics/Topics';
import Quizzes from './Quizzes/Quizzes';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to="/login" >Login / </Link>
          <Link to="/signup" >Sign Up</Link></li>
          <li><Link to="/topics" >Topics</Link></li>
          <li><Link to="/quizzes" >Quizzes</Link></li>
        </ul></header>
      <main >


        <Route exact path='/' component={Homepage}>
        </Route>

        <Route path='/login' component={Login}>
        </Route>

        <Route path='/signup' component={Signup}>
        </Route>


        <Route path='/topics' component={Topics} >
        </Route>


        <Route path='/quizzes' component={Quizzes} >
        </Route>







      </main>
    </div>
  );
}

export default App;
