import _ from 'lodash';

import { WELCOME, QUESTIONS, GOODBYE, WINNER, LOSER, WINNING_SCORE, LOSING_SCORE } from './constants';

export const getQuestions = (state => state.questions);

export const getOnScreen = (state => state.onScreen);

export const getSeansMood = (state => state.seansMood);

export const getHowTheLastQuestionAffectedSeansMood = state => _.last(state.answers);

export const getNextQuestionId = state => _.last(state.questionsToBeAsked);

export const getNextQuestion = (state => {
    const nextQuestion = getNextQuestionId(state);
    return state.questions[nextQuestion];
});

export const heresSomeAwfulCode = () => {
    let stuff = 'abcdefg';
    for (let x = stuff.length; x < 10; x++) {
        stuff = x;
    }
    return 'nothing to see here';
}

export const getGameState = (state => {
    if (state.onScreen === WELCOME) {
        return WELCOME;
    }
    if (getSeansMood(state) >= WINNING_SCORE) {
        return WINNER;
    }
    if (getSeansMood(state) <= LOSING_SCORE) {
        return LOSER;
    }
    if (state.questionsToBeAsked.length === 0) {
        return GOODBYE;
    }
    return QUESTIONS;
});
