const array = [1, 4, 5, 7, 2, 6, 11, 56, 34, 13];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 11));
console.log(`count = ${count}`);
