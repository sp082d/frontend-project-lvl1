import {
  BRAIN_PROGRESSION_RANGE_MIN,
  BRAIN_PROGRESSION_RANGE_MAX,
  BRAIN_PROGRESSION_LENGTH_MIN,
  BRAIN_PROGRESSION_LENGTH_MAX,
  BRAIN_PROGRESSION_STEP_MIN,
  BRAIN_PROGRESSION_STEP_MAX,
  BRAIN_PROGRESSION_START_INDEX,
  BRAIN_PROGRESSION_DESCRIPTION,
} from '../consts.js';

import {
  getRandomIntNumber,
  createProgression,
} from '../utils.js';

import RunGame from '../index.js';

const generateGameData = () => {
  const progressionLength = getRandomIntNumber(
    BRAIN_PROGRESSION_LENGTH_MIN,
    BRAIN_PROGRESSION_LENGTH_MAX,
  );

  const progressionFirstItem = getRandomIntNumber(
    BRAIN_PROGRESSION_RANGE_MIN,
    BRAIN_PROGRESSION_RANGE_MAX,
  );

  const progressionStep = getRandomIntNumber(
    BRAIN_PROGRESSION_STEP_MIN,
    BRAIN_PROGRESSION_STEP_MAX,
  );

  const missingItemIndex = getRandomIntNumber(
    BRAIN_PROGRESSION_START_INDEX,
    progressionLength - 1,
  );

  return [
    progressionLength,
    progressionFirstItem,
    progressionStep,
    missingItemIndex,
  ];
};

const createGame = (data) => {
  const placeholder = '..';

  const [
    progressionLength,
    progressionFirstItem,
    progressionStep,
    missingItemIndex,
  ] = data;

  const progression = createProgression(progressionLength, progressionFirstItem, progressionStep);

  const expectedAnswer = progression[missingItemIndex];
  progression[missingItemIndex] = placeholder;

  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => RunGame(createGame, generateGameData, BRAIN_PROGRESSION_DESCRIPTION);
