const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function binarySearch(arr, item) {
  let start = 0; // Первый элемент массива
  let end = arr.length; // Последний элемент массива
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    } 
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1
    }
  }
  return position;
}

console.log(binarySearch(arr, 4))

// Сложность этого алгоритма O (log2n) => O от логарифм N по основанию 2
// В этом примере у нас 16 элементов, логарифм от 16 по основанию 2 = 4
// то есть 4 это максимальное количество итераций, чтобы найти нужное значение.