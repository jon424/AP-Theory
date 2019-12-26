import React from 'react';
import './App.css';
import './index.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Topics from './Topics/Topics';
import Quizzes from './Quizzes/Quizzes';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Topic from './Topic/Topic';
import Quiz from './Quiz/Quiz';
import Question from './Quiz/Question';
import quizQuestions from './api/quizQuestions';
import Result from './Quiz/Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    //while there remains elements to shuffle...
    while (0 !== currentIndex) {

      //pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //and swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }



  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

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

        <main>

          {/*should the quiz be displayed? if state.result has a value, then it will display the result */}
          {this.state.result ? this.renderResult() : this.renderQuiz()}



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

          <Question content="What is your favorite food?" />


        </main>
      </div>
    )
  };
}


export default App;
