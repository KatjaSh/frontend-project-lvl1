import readlineSync from 'readline-sync';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};
export const game = (rule, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let count = 0;
  const iter = () => {
    if (round()) {
      console.log('Correct!');
      count += 1;
      if (count < 3) {
        return iter();
      }
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`Let's try again, ${userName}!`);
    return true;
  };
  iter();
};
