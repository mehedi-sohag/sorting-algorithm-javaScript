const arr = [5, 9, 11, 25, 1];
function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let temp_arr = new Array(high + 1);
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      temp_arr[k++] = arr[i++];
    } else {
      temp_arr[k++] = arr[j++];
    }
  }
  for (; i <= mid; i++) {
    temp_arr[k++] = arr[i];
  }
  for (; j <= high; j++) {
    temp_arr[k++] = arr[j];
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp_arr[i];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
