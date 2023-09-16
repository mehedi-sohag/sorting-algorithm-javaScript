const arr = [8, 7, 2, 5, 3];

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low + 1;
  let j = high;
  do {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } while (i < j);
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low, high) {
  let j;
  if (low < high) {
    j = partition(arr, low, high);
    quickSort(arr, low, j);
    quickSort(arr, j + 1, high);
  }
}

console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
