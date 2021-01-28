/* eslint-disable indent */
import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionAnswer = () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  game(rule, questionAnswer);
};
