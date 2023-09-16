const heap = [Number.MIN_VALUE, 10, 20, 30, 25, 5, 40, 35, 50];
function deleteHeap(arr, n) {
  let temp = arr[1];
  arr[1] = arr[n];
  let i = 1;
  let j = 2 * i;
  while (j < n) {
    if (arr[j + 1] > arr[j]) {
      j = j + 1;
    }

    if (arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i = j;
      j = 2 * j;
    } else {
      break;
    }
  }
  arr[n] = temp;
}
function createHeap(arr, n) {
  let temp = arr[n];
  let i = n;
  while (i > 1 && temp > arr[Math.ceil(i / 2)]) {
    arr[i] = arr[Math.ceil(i / 2)];
    i = Math.ceil(i / 2);
  }
  arr[i] = temp;
}

for (let i = 1; i < heap.length; i++) {
  createHeap(heap, i);
}
console.log(heap.slice(1));

for (let i = 8; i >= 1; i--) {
  deleteHeap(heap, i);
}

console.log(heap.slice(1));
