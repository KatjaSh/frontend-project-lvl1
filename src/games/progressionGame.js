import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../index.js';

const rule = 'What number is missing in the progression?';
const questionAnswer = () => {
  const startNum = getRandomInt(0, 101);
  const step = getRandomInt(1, 6);
  const progrLength = getRandomInt(5, 12);
  const progression = [startNum];
  for (let i = 1; i < progrLength; i += 1) {
    const nextNum = progression[i - 1] + step;
    progression[i] = nextNum;
  }
  const missingNumIndex = getRandomInt(0, progrLength);
  const question = () => {
    progression[missingNumIndex] = '..';
    return progression.join(' ');
  };
  const correctAnswer = progression[missingNumIndex].toString();
  return cons(question(), correctAnswer);
};

export default () => {
  game(rule, questionAnswer);
};
