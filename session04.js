const session04 = {
  // Calculate the sum of elements in an array.
  sumOfArr: function (arr) {
    let sum = 0;
    for (let val of arr) {
      sum += val;
    }
    return sum;
  },
  // Find the maximum and minimum elements in an array.
  maxAndMinInArr: function (arr) {
    if (arr.length === 0) return null;
    let max = -Infinity;
    let min = Infinity;
    for (let val of arr) {
      if (max < val) {
        max = val;
      }
      if (min > val) {
        min = val;
      }
    }
    return [min, max];
    /**
     * solution 1.1
    return arr.reduce(
      ([max, min], val) => [max > val ? max : val, min < val ? min : val],
      [-Infinity, Infinity]
    );
     * solution 1.2
    return [Math.max(...arr), Math.min(...arr)];
     */
  },
  // Find the second-largest element in an array.
  findSecondLargeVal: function (arr) {
    if (arr.length < 2) return null;
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let ind = 0; ind < arr.length; ind++) {
      if (max < arr[ind]) {
        secondMax = max;
        max = arr[ind];
      }
      if (arr[ind] < max && secondMax < arr[ind]) {
        secondMax = arr[ind];
      }
    }
    return secondMax;
  },
  // Rotate an array to the left by one position.
  rotateArrToLeftByOne: function (arr) {
    let temp = arr[0];
    for (let ind = 1; ind < arr.length; ind++) {
      arr[ind - 1] = arr[ind];
    }
    arr[arr.length - 1] = temp;
    return arr;
  },
  // Rotate an array to the left by k position.
  rotateArrToLeftByK: function (arr = [], size, k = 0) {
    if (size < 2) return arr;
    k %= arr.length;
    while (k > 0) {
      let temp = arr[0];
      for (let ind = 1; ind < size; ind++) {
        arr[ind - 1] = arr[ind];
      }
      arr[size - 1] = temp;
      --k;
    }
    return arr;
  },
  // Reverse an array.
  reverseArr: function (arr, size = arr.length, start = 0, end = size - 1) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  },
  // Sort an array of integers.
  arrSorting: function (arr) {
    for (let ind = 0; ind < arr.length; ind++) {
      for (let ind1 = 0; ind1 < arr.length; ind1++) {
        // For assending
        if (arr[ind] < arr[ind1]) {
          let temp = arr[ind];
          arr[ind] = arr[ind1];
          arr[ind1] = temp;
        }
        // // for descending
        // if (arr[ind] > arr[ind1]) {
        //   let temp = arr[ind];
        //   arr[ind] = arr[ind1];
        //   arr[ind1] = temp;
        // }
      }
    }
    return arr;
  },
  // Remove duplicates in an sorted array
  rmDuplicatesInArr: function (arr) {
    console.log(arr.length);

    for (let ind = 0, slowInd = 0; ind < arr.length; ind++) {
      if (arr[ind] !== arr[slowInd]) {
        slowInd++;
        arr[slowInd] = arr[ind];
      }
      if (arr.length - 1 === ind) {
        slowInd++;
        arr.length = slowInd;
      }
    }
    console.log(arr.length);

    return arr;
  },
  // todo Find the number of occurrences of an element in an array.
  countOccurencesInArr: function (arr, element) {
    let occurrence = {};
    for (let val of arr) {
      if (val === element) {
        occurrence[val] = (occurrence[val] || 0) + 1;
      }
    }
    return occurrence[element];
  },
  // todo Merge two sorted arrays.
  mergeArr: function (arr1, arr2) {
    let merge = arr1;
    for (let ind = 0; ind < arr2.length; ind++) {
      merge.push(arr2[ind]);
    }
    return session04.arrSorting(merge);
  },
  // todo Find the cumulative sum of an array.
  cumulativeSum: function (arr) {
    let cumulativeSum = 0;
    let cumulativeArr = [];
    for (let val of arr) {
      cumulativeSum += val;
      cumulativeArr.push(cumulativeSum);
    }
    return { cumulativeArr, cumulativeSum };
  },
  // todo Calculate the product of all elements in an array.
  productArr: function (arr) {
    let product = 1;
    for (let val of arr) {
      product *= val;
    }
    return product;
  },
  // todo Check if an array is a palindrome.
  palindromeArr: function (arr, start = 0, end = arr.length - 1) {
    while (start < end) {
      if (arr[start] != arr[end]) return false;
      start++;
      end--;
    }
    return true;
  },
};

module.exports = session04;
