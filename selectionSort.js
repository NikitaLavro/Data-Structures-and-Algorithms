const selectionArr = [0, 3, 5, 6, 3, 2, 4, 8, -1, 7, 25, 32];
let selectionCount = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      selectionCount += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(selectionArr));
console.log(selectionCount);
