import readlineSync from 'readline-sync';
import { game, getRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';
const round = () => {
  const a = getRandomInt(1, 51);
  const b = getRandomInt(1, 51);
  const operators = ['*', '+', '-'];
  const operator = operators[getRandomInt(0, 3)];
  const question = `${a} ${operator} ${b}`;
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
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (answer === correctAnswer()) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
  return false;
};
export default () => {
  game(rule, round);
};
