import {
  BRAIN_GCD_RANGE_MIN,
  BRAIN_GCD_RANGE_MAX,
  BRAIN_GCD_DESCRIPTION,
} from '../consts.js';

import {
  getRandomIntNumber,
  getGCD,
} from '../utils.js';

import RunGame from '../index.js';

const generateGameData = () => [
  getRandomIntNumber(BRAIN_GCD_RANGE_MIN, BRAIN_GCD_RANGE_MAX),
  getRandomIntNumber(BRAIN_GCD_RANGE_MIN, BRAIN_GCD_RANGE_MAX),
];

const createGame = (data) => {
  const [firstNumber, secondNumber] = data;

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGCD(firstNumber, secondNumber);

  return [question, expectedAnswer];
};

export default () => RunGame(createGame, generateGameData, BRAIN_GCD_DESCRIPTION);
