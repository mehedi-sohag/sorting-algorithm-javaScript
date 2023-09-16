const arr = [1, 3, 5, 2, 4];

for (let i = 1; i < arr.length; i++) {
  let temp = arr[i];
  let j = i - 1;
  while (j > -1 && arr[j] > temp) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = temp;
}

console.log(arr);
