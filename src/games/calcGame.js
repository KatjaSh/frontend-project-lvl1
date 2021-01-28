import { cons } from '@hexlet/pairs';
import { game, getRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';
const questionAnswer = () => {
  const a = getRandomInt(1, 51);
  const b = getRandomInt(1, 51);
  const operators = ['*', '+', '-'];
  const operator = operators[getRandomInt(0, 3)];
  const question = () => `${a} ${operator} ${b}`;
  const correctAnswer = () => {
    let calc;
    switch (operator) {
      case '*':
        calc = a * b;
        break;

      case '+':
        calc = a + b;
        break;

      case '-':
        calc = a - b;
        break;

      default:
        break;
    }
    return calc.toString();
  };
  return cons(question(), correctAnswer());
};
export default () => {
  game(rule, questionAnswer);
};
