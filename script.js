// Getting input via STDIN
const readline = require("readline");
const {
  difference,
  oddEven,
  perimeter,
  largestOfFour,
  avgOfThree,
  countVowels,
  charUpper,
  rev,
  square,
  findInteger,
  sum,
  findMaxMidMin,
  countDigits,
  onlyAlpha,
  areaOfCircle,
  vowelOrNot,
} = require("./session01");
const {
  sumOfDigits,
  factorial,
  fibonacci,
  isPrime,
  hollowSquare,
  lcm,
  gcd,
  palindrome,
  coPrimes,
  allDivisors,
  checkboard,
  diamond,
} = require("./session02");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const size = Number(userInput[0]);
  diamond(size);
});
