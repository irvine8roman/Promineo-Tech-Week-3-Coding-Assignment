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

let characterLengths = [];

for (let i = 0; i < names.length; i++) {
  characterLengths.push(names[i].length);
}

console.log(characterLengths);

console.log("#6-------------------"); // 6.
