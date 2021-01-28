import { cons } from '@hexlet/pairs';
import { getRandomInt, game } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAnswer = () => {
  const question = getRandomInt(1, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  game(rule, questionAnswer);
};
