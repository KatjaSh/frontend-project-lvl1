import readlineSync from 'readline-sync';
import { game, getRandomInt } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const round = () => {
  const a = getRandomInt(1, 101);
  const b = getRandomInt(1, 101);
  const question = `${a} ${b}`;
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
