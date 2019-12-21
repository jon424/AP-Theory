import React from 'react';
import { Link } from 'react-router-dom';


class Quizzes extends React.Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>

      <h1>Quiz</h1>

      <Link to="/quiz" >Quiz</Link>



      </React.Fragment>
     );
  }
}
 
export default Quizzes;