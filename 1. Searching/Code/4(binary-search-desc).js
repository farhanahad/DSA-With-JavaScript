// binary search in a descending array

let DescArray = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
let DescTarget = 40;

function binarySearchDesc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `Descending Array - Target is found at position ${target} and index number ${mid}`;
    } else if (arr[mid] < target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return "Not Found!";
}

console.log(binarySearchDesc(DescArray, DescTarget));
