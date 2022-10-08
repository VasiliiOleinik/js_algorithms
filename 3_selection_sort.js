const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
console.log(selectionSort(arr));

// Сложность этого алгоритма O(n2)
// Элементов 26, количество действий 325
// 325 != 25 в квадрате
// Внешний цикл проходит по всему массиву, в внутрнний каждый раз смещается на 1
// Получается сложность будет равна O(1\2 n2), но 1\2 не указывается при описании сложности
// по этмоу сложность будет просто O(n2)