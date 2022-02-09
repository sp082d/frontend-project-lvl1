import {
  BRAIN_EVEN_RANGE_MAX,
  BRAIN_EVEN_RANGE_MIN,
  BRAIN_GAMES_TRUE_ANSWER,
  BRAIN_GAMES_FALSE_ANSWER,
  BRAIN_EVEN_DESCRIPTION,
} from '../consts.js';

import {
  getRandomIntNumber,
  isEven,
} from '../utils.js';

import RunGame from '../index.js';

const generateGameData = () => getRandomIntNumber(BRAIN_EVEN_RANGE_MIN, BRAIN_EVEN_RANGE_MAX);

const createGame = (number) => {
  const expectedAnswer = isEven(number) ? BRAIN_GAMES_TRUE_ANSWER : BRAIN_GAMES_FALSE_ANSWER;

  return [number, expectedAnswer];
};

export default () => RunGame(createGame, generateGameData, BRAIN_EVEN_DESCRIPTION);
