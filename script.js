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
