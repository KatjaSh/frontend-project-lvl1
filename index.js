import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomInt = (a, b) => {
    const min = Math.ceil(a);
    const max = Math.floor(b);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  let count = 0;
  const gameRound = () => {
    const number = getRandomInt(1, 101);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
      if (count < 3) {
        return gameRound();
      }
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return true;
  };
  gameRound();
};
