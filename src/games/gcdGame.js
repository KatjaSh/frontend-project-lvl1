import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const questionAnswer = () => {
  const a = getRandomInt(1, 101);
  const b = getRandomInt(1, 101);
  const question = () => `${a} ${b}`;
  const correctAnswer = () => {
    let result;
    const num = a > b ? b : a;
    for (let i = num; i >= 1; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        result = i;
        break;
      }
    }
    return result.toString();
  };
  return cons(question(), correctAnswer());
};

export default () => {
  game(rule, questionAnswer);
};
