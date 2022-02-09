// Общие константы
const COMMON_GREETING = 'Welcome to the Brain Games!';
const USERS_GREETING = 'Hello,';

const DEFAULT_USER_NAME = 'John';

const QUESTION_ABOUT_USER_NAME = 'May I have you name?';

const END_GAMES_CORRECT_ANSWERS_COUNT = 3;

const BRAIN_GAMES_QUESTION = 'Question:';
const BRAIN_GAMES_QUESTION_TO_USER = 'Your answer:';

const BRAIN_GAMES_TRUE_MESSAGE = 'Correct!';

const BRAIN_GAMES_TRUE_ANSWER = 'yes';
const BRAIN_GAMES_FALSE_ANSWER = 'no';

const BRAIN_GAMES_FALSE_MESSAGE = 'is wrong answer ;(. Correct answer was';

const BRAIN_GAMES_TRUE_END_MESSAGE = 'Congratulations,';
const BRAIN_GAMES_FALSE_END_MESSAGE = 'Let\'s try again,';

//-------------------------------------------------------------------------------------------

// Константы для Игры: "Проверка на чётность" или brain-even
const BRAIN_EVEN_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const BRAIN_EVEN_RANGE_MIN = 0;
const BRAIN_EVEN_RANGE_MAX = 100;

// Константы для Игра: "Калькулятор" или brain-calc

const BRAIN_CALC_DESCRIPTION = 'What is the result of the expression?';

const BRAIN_CALC_SUPPORTED_MATH_OPERATIONS_LIST = ['+', '-', '*'];

const BRAIN_CALC_RANGE_MIN = 0;
const BRAIN_CALC_RANGE_MAX = 10;

// Константы для Игра: "НОД" или brain-gcd

const BRAIN_GCD_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const BRAIN_GCD_RANGE_MIN = 0;
const BRAIN_GCD_RANGE_MAX = 10;

// Константы для Игра: "Арифметическая прогрессия" или brain-progression

const BRAIN_PROGRESSION_DESCRIPTION = 'What number is missing in the progression?';

const BRAIN_PROGRESSION_RANGE_MIN = 10;
const BRAIN_PROGRESSION_RANGE_MAX = 100;

const BRAIN_PROGRESSION_LENGTH_MIN = 0;
const BRAIN_PROGRESSION_LENGTH_MAX = 10;

const BRAIN_PROGRESSION_STEP_MIN = 1;
const BRAIN_PROGRESSION_STEP_MAX = 10;

const BRAIN_PROGRESSION_START_INDEX = 0;

// Константы для Игра: "Простое ли число?" или brain-prime

const BRAIN_PRIME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const BRAIN_PRIME_RANGE_MIN = 0;
const BRAIN_PRIME_RANGE_MAX = 100;

export {
  COMMON_GREETING,
  USERS_GREETING,
  DEFAULT_USER_NAME,
  QUESTION_ABOUT_USER_NAME,

  END_GAMES_CORRECT_ANSWERS_COUNT,

  BRAIN_GAMES_QUESTION,
  BRAIN_GAMES_QUESTION_TO_USER,
  BRAIN_GAMES_TRUE_ANSWER,
  BRAIN_GAMES_FALSE_ANSWER,
  BRAIN_GAMES_TRUE_MESSAGE,
  BRAIN_GAMES_FALSE_MESSAGE,
  BRAIN_GAMES_FALSE_END_MESSAGE,
  BRAIN_GAMES_TRUE_END_MESSAGE,

  BRAIN_EVEN_DESCRIPTION,
  BRAIN_EVEN_RANGE_MIN,
  BRAIN_EVEN_RANGE_MAX,

  BRAIN_CALC_DESCRIPTION,
  BRAIN_CALC_SUPPORTED_MATH_OPERATIONS_LIST,
  BRAIN_CALC_RANGE_MIN,
  BRAIN_CALC_RANGE_MAX,

  BRAIN_GCD_DESCRIPTION,
  BRAIN_GCD_RANGE_MIN,
  BRAIN_GCD_RANGE_MAX,

  BRAIN_PROGRESSION_DESCRIPTION,
  BRAIN_PROGRESSION_RANGE_MIN,
  BRAIN_PROGRESSION_RANGE_MAX,
  BRAIN_PROGRESSION_LENGTH_MIN,
  BRAIN_PROGRESSION_LENGTH_MAX,
  BRAIN_PROGRESSION_STEP_MIN,
  BRAIN_PROGRESSION_STEP_MAX,
  BRAIN_PROGRESSION_START_INDEX,

  BRAIN_PRIME_DESCRIPTION,
  BRAIN_PRIME_RANGE_MIN,
  BRAIN_PRIME_RANGE_MAX,
};
