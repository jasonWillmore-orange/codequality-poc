import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'

import Welcome from './components/Welcome';
import Question from './components/Question';
import Sean from './components/Sean';

import ACTIONS from "./actions";

import * as selectors from "./selectors";

function App() {
  const dispatch = useDispatch();

  const question = useSelector(selectors.getNextQuestion);
  const questionId = useSelector(selectors.getNextQuestionId);
  const seansMood = useSelector(selectors.getSeansMood);
  const gameState = useSelector(selectors.getGameState);
  const lastAnswer = useSelector(selectors.getHowTheLastQuestionAffectedSeansMood);

  const displays = {
    WELCOME: <Welcome handler={() => dispatch({ type: ACTIONS.Types.START_GAME })} />,
    QUESTIONS: <Question lastAnswer={lastAnswer} handler={(value) => dispatch({ type: ACTIONS.Types.SELECT_ANSWER, data: { questionId, moodEffect: value } })} question={question} />,
    GOODBYE: <h1>Bye</h1>,
    WINNER: <h1>Congratulations, you've made Sean happy!</h1>,
    LOSER: <h1>You've made Sean very unhappy. Please refresh to play again.</h1>,
  };

  return (
    <div className="App App-body">
      {displays[gameState]}
      <Sean mood={seansMood} />
      <footer className="App-secondary"><a href="https://github.com/jonnyohjonnyo/codequality-poc">Code repository</a></footer>
    </div>
  );
}

export default App;
