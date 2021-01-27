import readlineSync from 'readline-sync';
import { getRandomInt, game } from '../index.js';

const round = () => {
  const question = getRandomInt(1, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (answer === correctAnswer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  game(rule, round);
};
