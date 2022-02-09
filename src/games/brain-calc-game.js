import {
  BRAIN_CALC_SUPPORTED_MATH_OPERATIONS_LIST,
  BRAIN_CALC_RANGE_MIN,
  BRAIN_CALC_RANGE_MAX,
  BRAIN_CALC_DESCRIPTION,
} from '../consts.js';

import {
  getRandomIntNumber,
  getRandomItemFromArray,
  calculateMathExpression,
} from '../utils.js';

import RunGame from '../index.js';

const generateGameData = () => {
  const firstOperand = getRandomIntNumber(BRAIN_CALC_RANGE_MIN, BRAIN_CALC_RANGE_MAX);
  const secondOperand = getRandomIntNumber(BRAIN_CALC_RANGE_MIN, BRAIN_CALC_RANGE_MAX);
  const operation = getRandomItemFromArray(BRAIN_CALC_SUPPORTED_MATH_OPERATIONS_LIST);

  return [firstOperand, secondOperand, operation];
};

const createGame = (data) => {
  const [firstOperand, secondOperand, operation] = data;

  const question = `${firstOperand} ${operation} ${secondOperand}`;

  const expectedAnswer = calculateMathExpression(firstOperand, secondOperand, operation);

  return [question, expectedAnswer];
};

export default () => RunGame(createGame, generateGameData, BRAIN_CALC_DESCRIPTION);
