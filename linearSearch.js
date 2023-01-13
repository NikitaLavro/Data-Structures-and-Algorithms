const linearArray = [1, 4, 5, 7, 2, 6, 11, 56, 34, 13];
let linearCount = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    linearCount += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(linearArray, 11));
console.log(`count = ${linearCount}`);
