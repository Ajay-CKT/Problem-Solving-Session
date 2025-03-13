const findOccurrence = (arr, target, isFirst = true, start = 0) => {
  let end = arr.length - 1;
  let foundInd = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      foundInd = mid;
      if (isFirst) end = mid - 1;
      else start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return foundInd;
};

const session05 = {
  linearSearch: function (arr, target) {
    let result = -1;
    for (let ind = 0; ind < arr.length; ind++) {
      if (arr[ind] === target) return ind;
    }
    return result;
  },
  binarySearch: function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return { midValue: arr[mid], atIndex: mid };
      else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  },
  // Find the first and last occurrence of a target in an array.
  firstAndLastOccurence: function (arr, target) {
    let first = -1;
    let last = -1;
    let count = 0;
    for (let ind = 0; ind < arr.length; ind++) {
      if (arr[ind] === target) {
        last = ind;
        count++;
        if (first === -1) {
          first = ind;
        }
      }
    }
    return { count, first, last };
  },
  // Find the first and last occurrence of a target in a sorted array.
  firstAndLastOccurenceSorted: function (arr, target) {
    let first = findOccurrence(arr, target);
    let last = findOccurrence(arr, target, false, first);
    return { first, last };
  },
  // Count occurrences of a target using binary search.
  countOccurrence: function (arr, target) {
    let { first, last } = session05.firstAndLastOccurenceSorted(arr, target);
    return first === -1 ? 0 : last - first + 1;
  },
  // Find the index where an element should be inserted in a sorted array.
  findInsertionIndex: function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  },
};
module.exports = session05;
