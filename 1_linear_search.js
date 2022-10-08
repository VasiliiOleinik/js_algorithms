const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 11));

// Сложность этого алгоритма O(n), где n - количество элементов в массиве.