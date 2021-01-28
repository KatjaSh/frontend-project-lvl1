import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};
export const game = (rule, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let count = 0;
  const iter = () => {
    const pair = questionAnswer();
    const answer = readlineSync.question(`Question: ${car(pair)}\nYour answer: `);
    if (answer === cdr(pair)) {
      console.log('Correct!');
      count += 1;
      if (count < 3) {
        return iter();
      }
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(pair)}'.\nLet's try again, ${userName}!`);
    return true;
  };
  iter();
};
