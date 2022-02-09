import {
  BRAIN_PRIME_RANGE_MIN,
  BRAIN_PRIME_RANGE_MAX,
  BRAIN_GAMES_TRUE_ANSWER,
  BRAIN_GAMES_FALSE_ANSWER,
  BRAIN_PRIME_DESCRIPTION,
} from '../consts.js';

import {
  getRandomIntNumber,
  isPrime,
} from '../utils.js';

import RunGame from '../index.js';

const generateGameData = () => getRandomIntNumber(BRAIN_PRIME_RANGE_MIN, BRAIN_PRIME_RANGE_MAX);

const createGame = (number) => {
  const expectedAnswer = isPrime(number) ? BRAIN_GAMES_TRUE_ANSWER : BRAIN_GAMES_FALSE_ANSWER;

  return [number, expectedAnswer];
};

export default () => RunGame(createGame, generateGameData, BRAIN_PRIME_DESCRIPTION);
