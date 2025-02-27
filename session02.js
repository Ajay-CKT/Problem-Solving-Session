const session02 = {
  // Sum of digits in a number.
  sumOfDigits: function (num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  },
  // Calculate the factorial of a number.
  factorial: function (num) {
    let fact = 1;
    while (num >= 1) {
      fact *= num;
      --num;
    }
    return fact;
  },
  // Generate the Fibonacci sequence up to N terms.(Space Complexity)
  fibonacci: function (num) {
    let x = 0;
    let y = 1;
    if (num < 0) return;
    if (num < 1) return;
    if (num < 2) {
      console.log("F(0) ->", x);
      return;
    }
    if (num < 3) {
      console.log("F(0) ->", x);
      console.log("F(1) ->", y);
      return;
    }
    for (let i = 0; i < num; i++) {
      console.log(`F(${i}) ->`, x);
      x = x + y;
      y = x - y;
    }
  },
  // Check if a number is prime. (Time Complexity)
  isPrime: function (num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    // for (let factor = 2; factor < num / 2; factor++) {
    // for (let factor = 3; factor * factor <= num; factor++) {
    for (let factor = 3; factor * factor <= num; factor += 2) {
      if (num % factor === 0) {
        return [factor, false];
      }
    }
    return true;
  },
  // Print a hollow square pattern.
  hollowSquare: function (size) {
    for (let row = 0; row < size; row++) {
      const line = [];
      for (let col = 0; col < size; col++) {
        if (row == 0 || col == 0 || row == size - 1 || col == size - 1)
          line.push("*");
        else line.push(" ");
      }
      console.log(line.join(" "));
    }
  },
};
module.exports = session02;
