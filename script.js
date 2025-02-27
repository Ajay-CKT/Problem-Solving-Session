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
} = require("./session01");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  /*
  // todo Calculate the difference between two integers.
  // const [num1, num2] = userInput[0].split(" ").map(Number);
  // console.log(difference(num1, num2));
  */
  /***********************************************************************/
  /*
  // todo Check if a number is even or odd.
  const num = +userInput[0];
  console.log(oddEven(num));
  */
  /***********************************************************************/
  /*
  // todo Calculate the perimeter of a rectangle.
  const [length, breadth] = userInput[0].split(" ").map(Number);
  console.log(perimeter(length, breadth));
  */
  /***********************************************************************/
  /*
  // todo Find the largest of four numbers.
  const [num1, num2, num3, num4] = userInput[0].split(" ").map(Number);
  console.log(largestOfFour(num1, num2, num3, num4));
  */
  /***********************************************************************/
  /*
  // todo Calculate the average of three numbers.
  const arr = userInput[0].split(" ").map(Number);
  console.log(avgOfThree(...arr, arr.length));
  */
  /***********************************************************************/
  /*
  // todo Count the number of vowels in a string.
  const str = userInput[0];
  console.log(countVowels(str.toLowerCase()));
  */
  /***********************************************************************/
  /*
  // todo Determine if a character is uppercase.
  const char = userInput[0];
  console.log(charUpper(char));
  */
  /***********************************************************************/
  /*
  // todo Print the reverse of a string.
  const str = userInput[0];
  console.log(rev(str));
  */
  /***********************************************************************/
  /*
  // todo Find the square of a number.
  const num = +userInput[0];
  console.log(square(num));
  */
});
