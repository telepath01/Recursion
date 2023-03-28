console.log("Hello World");
const arrayA = [5, 8, 3, 2, 6, 1, 4, 7];
const arraySplit1 = [];
const arraySplit2 = [];

function mergeSort(arrA) {
  console.log(arrA);
  splitter(arrA, arrB);
  console.log(arrB);
}

mergeSort(arrayA, arraySplit1);

function splitter(arr1, arr2) {
  let testArr = arr1.slice(0, arr1.length / 2);
  console.log(testArr);
  console.log(arr1);
}
