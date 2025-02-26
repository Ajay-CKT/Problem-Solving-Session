//! Determine if a number is positive or negative.
//! Find the sum of two integers.
//! Identify the maximum, middle and minimum of three numbers.
//! Count the number of digits in a number.
//! Check if a string contains only alphabets.
//! Calculate the area of a circle with a given radius.
//! Check if a character is a vowel.

// todo Post - Session Practice Questions:

const maxOfTwo = (num1, num2) => (num1 > num2 ? num1 : num2);

const session01 = {
  // todo Calculate the difference between two integers.
  difference: function (num1, num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1;
  },
  // todo Check if a number is even or odd.
  oddEven: function (num) {
    return num % 2 === 0 ? "Even" : "Odd";
  },
  // todo Calculate the perimeter of a rectangle.
  perimeter: function (length, breadth) {
    if (length > 0 && breadth > 0) {
      return parseFloat((2 * (length + breadth)).toFixed(2));
    } else {
      return "Invalid input";
    }
  },
  // todo Find the largest of four numbers.
  largestOfFour: function (num1, num2, num3, num4) {
    return maxOfTwo(maxOfTwo(maxOfTwo(num1, num2), num3), num4);
  },
  // todo Calculate the average of three numbers.
  avgOfThree: function (num1, num2, num3, length) {
    return ((num1 + num2 + num3) / length).toFixed(2);
  },
  // todo Count the number of vowels in a string.
  countVowels: function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      switch (str.charCodeAt(i)) {
        case 97:
        case 101:
        case 105:
        case 111:
        case 117:
          count++;
          break;
      }
    }
    return count;
  },
  // todo Determine if a character is uppercase.
  charUpper: function (char) {
    return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
  },
  // todo Print the reverse of a string.
  rev: function (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  },
  // todo Find the square of a number.
  square: function (num) {
    return num * num;
  },
};

module.exports = session01;
