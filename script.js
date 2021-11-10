console.log("#1-------------------"); // 1.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

function firstMinusLast(array) {
  console.log(array[array.length - 1] - array[0]);
}

firstMinusLast(ages);

ages.push(8);

firstMinusLast(ages);

const average =
  ages.reduce((accumulator, currentValue) => accumulator + currentValue) /
  ages.length;

console.log(ages);
console.log(average);

console.log("#2-------------------"); // 2.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let sum = 0;
for (let i = 0; i < names.length; i++) {
  sum += names[i].length;
}

let averageNameLength = sum / names.length;
console.log(averageNameLength);

let listOfNames = "";
for (let i = 0; i < names.length; i++) {
  listOfNames += names[i] + " ";
}

console.log(listOfNames);

console.log("#3-------------------"); // 3.

// names[names.length - 1]; //You can access the last element of an array using this piece of code. The .length returns the number of elements in the array
// // while the minus 1 will give you the last element since arrays are zero index

console.log("#4-------------------"); // 4.
// names[0]; //You can access the first element of any array by using the name of the array folowed by [0]. Since arrays are zero index

console.log("#5-------------------"); // 5.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log(nameLengths);

console.log("#6-------------------"); // 6.

const nameLengthsSum = nameLengths.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(nameLengthsSum);

console.log("#7-------------------"); // 7.

function multiplyWord(word, n) {
  const repeatedString = word.repeat(n);
  console.log(repeatedString);
}

multiplyWord("Beetlejuice!", 3);
multiplyWord("Candyman!", 5);

console.log("#8-------------------"); // 8.

function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

fullName("Irvine", "Roman");

console.log("#9-------------------"); // 9.

const numbers = [5, 9, 5, 6, 5, 5, 5, 5, 5, 8];

const areNumbersGreaterThanHundred = numbers.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
);

if (areNumbersGreaterThanHundred >= 100) {
  console.log(true);
  console.log(areNumbersGreaterThanHundred);
} else {
  console.log(false);
  console.log(areNumbersGreaterThanHundred);
}

console.log("#10-------------------"); // 10.

const averageOfNumbers =
  numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }) / numbers.length;

console.log(averageOfNumbers);

console.log("#11-------------------"); // 11.

const array1 = [5, 6, 1];
const array2 = [5, 5, 1];

function greaterAverage(array1, array2) {
  const sum1 = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const sum2 = array2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  console.log(sum1, sum2);
  if (sum1 > sum2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

greaterAverage(array1, array2);

console.log("#12-------------------"); // 12.

const isHotOutside = true;
const moneyInPocket = 10.51;

function willBuyDrink(boolean, number) {
  if (boolean === true && number > 10.5) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

willBuyDrink(isHotOutside, moneyInPocket);

console.log("#13-------------------"); // 13.

var isPalindrome = function (x) {
  let a = Array.from(x.toString()).map(String);
  // console.log(a);
  let a2 = a.join("");
  // console.log(a2);
  let b = a.reverse();
  b = b.join("");
  if (Number(a2) === Number(b)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isPalindrome("343434343");

//The function I have created is one that decides if a number entered is a Palindrome. The function takes the number and converts it to an array but in string form incase a negative number is entered. This is stored into a variable. Next, that variable is removed from the array and joined without spaces. This too is saved to a variable. Then we take that variable and reverse it, if this new variable mataches the previous variable we returrn True otherwise we return False. I created this function because I saw this on Leetcode. I tried several leetcode problems and this was the only one I could solve.
