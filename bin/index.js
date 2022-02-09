import readlineSync from 'readline-sync';

import {
  END_GAMES_CORRECT_ANSWERS_COUNT,
  BRAIN_GAMES_QUESTION,
  BRAIN_GAMES_QUESTION_TO_USER,
  BRAIN_GAMES_TRUE_MESSAGE,
  BRAIN_GAMES_FALSE_MESSAGE,
  BRAIN_GAMES_FALSE_END_MESSAGE,
  BRAIN_GAMES_TRUE_END_MESSAGE,
} from '../src/consts.js';

import greeting from '../src/cli.js';

const RunGame = (getGame, getGameData, gameDescription) => {
  const userName = greeting();

  console.log(gameDescription);

  for (let i = 0; i < END_GAMES_CORRECT_ANSWERS_COUNT; i += 1) {
    const gameData = getGameData();
    const [question, answer] = getGame(gameData);

    console.log(`${BRAIN_GAMES_QUESTION}, ${question}`);

    const expectedAnswer = String(answer);
    const userAnswer = readlineSync.question(`${BRAIN_GAMES_QUESTION_TO_USER}`);

    if (userAnswer === expectedAnswer) {
      console.log(`${BRAIN_GAMES_TRUE_MESSAGE}`);
    } else {
      console.log(`'${userAnswer}' ${BRAIN_GAMES_FALSE_MESSAGE} '${expectedAnswer}'.`);
      console.log(`${BRAIN_GAMES_FALSE_END_MESSAGE} ${userName}!`);
      return;
    }
  }

  console.log(`${BRAIN_GAMES_TRUE_END_MESSAGE} ${userName}!`);
};

export default RunGame;
