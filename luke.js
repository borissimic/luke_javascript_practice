const message =
  "Welcome to the Luke's home! Luke forgot who is his family and friends  so  he needs to reminde but he can ask only 1 of 4 questions at same time . Please help luke and chose one of four questions :";
console.log(message);

const whoIsFather = " Hmm Who is my   father ?";
const whoIsSister = "Hmm  Who is my   sister ?";
const whoIsBrother = "Hmm  Who is my  brother ?";
const whoIsDroid = "Hmm  Who is  my  droid ?";

const questions = [
  `1.${whoIsFather}`,
  `2.${whoIsSister}`,
  `3.${whoIsBrother}`,
  `4.${whoIsDroid}`,
];

console.log(questions);

const luke = {
  father: "Darth vader",
  sister: "Leia",
  brother: "Han",
  droid: "R2D2",
};

const inputNumber = +process.argv.slice(2);

if (inputNumber === 1) {
  console.log(whoIsFather);
  console.log(`${luke.father} : Luke , i am your father!`);
} else if (inputNumber === 2) {
  console.log(whoIsSister);
  console.log(`${luke.sister} : Luke , i am your sister!`);
} else if (inputNumber === 3) {
  console.log(whoIsBrother);
  console.log(`${luke.brother} : Luke , i am your brother!`);
} else if (inputNumber === 4) {
  console.log(whoIsDroid);
  console.log(`${luke.droid} : Luke , i am your droid!`);
} else {
  console.log("Hmm i only count to four.... please pick numbers from 1 to 4");
}
