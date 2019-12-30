import React from 'react';
import './App.css';
import './index.css';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Topics from './Topics/Topics';
import Quizzes from './Quizzes/Quizzes';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Topic from './Topic/Topic';
import MakeQuiz from './Quiz/MakeQuiz';
import Quiz from './Quiz/Quiz';
import Question from './Quiz/Question';
import quizQuestions from './api/quizQuestions';
import Result from './Quiz/Result';

class App extends React.Component {
  

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/login" >Login / </Link>
              <Link to="/signup" >Sign Up</Link></li>
            <li><Link to="/topics" >Topics</Link></li>
            <li><Link to="/quizzes" >Quizzes</Link></li>
          </ul></header>

         



          <Route exact path='/' component={Homepage}>
          </Route>

          <Route path='/login' component={Login}>
          </Route>

          <Route path='/signup' component={Signup}>
          </Route>


          <Route path='/topics' component={Topics} >
          </Route>

          <Route path='/topic' component={Topic} >
          </Route>


          <Route path='/quizzes' component={Quizzes} >
          </Route>

         
            <Route path='/quiz' component={Quiz} >
            </Route>
     
          
        
      </div>

    )
    
  };
}


export default App;

