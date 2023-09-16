const arr = [2, 1, 6, 7, 5];
let i, j, k;
for (i = 0; i < arr.length - 1; i++) {
  for (j = k = i; j < arr.length; j++) {
    if (arr[j] < arr[k]) {
      k = j;
    }
  }

  [arr[i], arr[k]] = [arr[k], arr[i]];
}

console.log(arr);
