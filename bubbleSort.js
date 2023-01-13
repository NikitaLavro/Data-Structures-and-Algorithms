const bubbleArray = [0, 3, 5, 6, 3, 2, 4, 8, -1, 7, 25, 32];
let bubbleCount = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    bubbleCount += 1;
  }
  return array;
}

console.log(bubbleSort(bubbleArray));
