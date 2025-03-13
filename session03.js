const toUpper = (str) => {
  let convertedStr = "";
  for (let ind = 0; ind < str.length; ind++) {
    if (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122) {
      convertedStr += String.fromCharCode(str.charCodeAt(ind) - 32);
    } else {
      convertedStr += str.charAt(ind);
    }
  }
  return convertedStr;
};

const toLower = (str) => {
  let convertedStr = "";
  for (let ind = 0; ind < str.length; ind++) {
    if (str.charCodeAt(ind) >= 65 && str.charCodeAt(ind) <= 90) {
      convertedStr += String.fromCharCode(str.charCodeAt(ind) + 32);
    } else {
      convertedStr += str.charAt(ind);
    }
  }
  return convertedStr;
};

const isAnagram = (str1 = "listen", str2 = "silent") => {
  str1 = toLower(str1);
  str2 = toLower(str2);

  if (str1.length !== str2.length) return false;

  let count1 = session03.frequency(str1);
  let count2 = session03.frequency(str2);
  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }
  return true;
};
const isPanagram = (str = "hello") => {
  const alphabets = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  if (str.length < 26) {
    return false;
  }
  for (let char of str) {
    alphabets[char] = alphabets[char] + 1;
  }
  for (let key in alphabets) {
    if (alphabets[key] === 0) {
      return false;
    }
  }
  return true;
};

const session03 = {
  // Reverse a string.
  strReverse: function (str) {
    let rev = "";
    for (let ind = str.length - 1; ind >= 0; ind--) {
      rev += str.charAt(ind);
    }
    return rev;
  },
  // Count vowels and consonants in a string.
  countVowelsAndConsonants: function (str) {
    let count = { vowels: 0, consonants: 0 };
    for (let ind = 0; ind < str.length; ind++) {
      if (
        "aeiou".includes(str.charAt(ind)) ||
        "aeiou".includes(str.charAt(ind))
      ) {
        count.vowels++;
      } else if (
        (str.charCodeAt(ind) >= 65 && str.charCodeAt(ind) <= 90) ||
        (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122)
      ) {
        count.consonants++;
      }
    }
    return count;
  },
  // Convert a string to lowercase/uppercase.
  strConvert: function (str, isUpper = true) {
    let convertedStr;
    if (isUpper) {
      convertedStr = toUpper(str);
    } else {
      convertedStr = toLower(str);
    }
    return convertedStr;
  },
  // Find the longest word in a sentence.
  longestWord: function (str) {
    let strArr = str.split(" ");
    let max = { word: "", length: -1 };
    for (let str of strArr) {
      if (str.length > max.length) {
        max.length = str.length;
        max.word = str;
      }
    }
    return max;
  },
  // Check if a string is a palindrome.
  palindrome: function (str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      ++left;
      --right;
    }
    return true;
  },
  // Remove duplicates from a string.
  rmDuplicates: function (str) {
    let uniqueStr = "";
    for (let char of str) {
      if (!uniqueStr.includes(char)) {
        uniqueStr += char;
      }
    }
    return uniqueStr;
  },
  // Find all substrings of a given string.
  subString: function (str) {
    const substrings = [];
    for (let itr = 0; itr < str.length; itr++) {
      let substring = "";
      for (let ind = itr; ind < str.length; ind++) {
        substring += str[ind];
        substrings.push(substring);
      }
    }
    return substrings;
  },
  // todo Concatenate two strings.
  concat: function (str1, str2) {
    return str1 + str2;
  },
  // todo Find the frequency of each character in a string.
  frequency: function (str) {
    let frequency = {};
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  },
  // todo Replace spaces in a string with %20.
  replaceSpaces: function (str) {
    // return str.replace(" ", "%20");
    let replacedStr = "";
    console.log(str.length);
    for (let ind = 0; ind < str.length; ind++) {
      if (str[ind] === " " && ind === str.length - 1) {
        return (replacedStr += "%20");
      } else if (str[ind] === " ") {
        replacedStr += "%20";
        ind++;
      }
      replacedStr += str[ind];
    }
    return replacedStr;
  },
  // todo Check if a string is an anagram and panagram of another.
  findStr: function (str1, str2, str3) {
    return { Anagram: isAnagram(str1, str2), Panagram: isPanagram(str3) };
  },
  // todo Count the number of words in a sentence.
  countWords: function (str) {
    const words = [];
    let word = "";
    for (let ind = 0; ind < str.length; ind++) {
      if (str[ind] === " ") {
        if (word !== "") {
          words.push(word);
          word = "";
        }
      }
      word += str[ind];
    }
    if (word !== "") words.push(word);
    return [words, words.length];
  },
  firstNonRepeatingChar: function (str = "hello") {
    let count = session03.frequency(str);
    for (let key in count) {
      if (count[key] === 1) {
        return { firstChar: key, count: count[key] };
      }
    }
    return -1;
  },
  // todo Remove all vowels from a string.
  rmVowels: function (str) {
    // return [str.replace(/[aeiouAEIOU]/g, "")];
    return [...str].filter((char) => !"aeiouAEIOU".includes(char)).join("");
  },
  // todo Find the shortest word in a sentence.
  shortestWord: function (str = "Welcome here") {
    let [words] = session03.countWords(str);
    console.log(words);

    let min = Infinity;
    for (let word of words) {
      if (word.length < min) {
        min = word.length;
      }
    }
    return min;
  },
  // todo Count occurrences of a substring within a string.
  countOccurrenceOfSubStr: function (
    str = "javascript and java",
    subStr = "java"
  ) {
    let substrings = session03.subString(str);
    let count = 0;
    for (let substr of substrings) {
      if (subStr === substr) {
        ++count;
      }
    }
    return count;
  },
};

/*
const arr = [-1, 2, 4, 7, 12, 17];

function findSumIndex(arr, target = 11) {
  if (arr.length < 2) return -1;
  for (let cur = 0; cur < arr.length; cur++) {
    for (let nxt = cur + 1; nxt < arr.length; nxt++) {
      if (arr[cur] + arr[nxt] === target) {
        return [cur, nxt];
      }
    }
  }
  return -1;
}

console.log(findSumIndex(arr, 11));
*/

/*
function nonRepeatingFirstChar(str = "") {
  console.log(str);

  if (str.length < 1) return -1;
  let countObj = {};
  for (let char of str) {
    countObj[char] = (countObj[char] || 0) + 1;
  }
  for (let key of str) {
    if (countObj[key] === 1) {
      return str.indexOf(key);
    }
  }
  return -1;
}

console.log(nonRepeatingFirstChar("LEETCODE".toLowerCase()));
*/

module.exports = session03;
