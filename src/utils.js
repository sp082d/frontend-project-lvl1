// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItemFromArray = (array) => {
  const randomIndex = getRandomIntNumber(0, array.length - 1);

  return array[randomIndex];
};

const isEven = (number) => number % 2 === 0;

const calculateMathExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unexpected operation: ${operation}`);
  }
};

// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGCD(b, (a % b));
};

const createProgression = (length, firstItem, progressionStep) => {
  const progression = [firstItem];

  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

export default {
  getRandomIntNumber,
  getRandomItemFromArray,
  isEven,
  calculateMathExpression,
  getGCD,
  createProgression,
  isPrime,
};
