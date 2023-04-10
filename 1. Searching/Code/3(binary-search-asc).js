// binary search in an ascending array
let AscArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let AscTarget = 50;

function binarySearchAsc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `Ascending Array - Target is found at position ${target} and index number ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return "Not Found!";
}

console.log(binarySearchAsc(AscArray, AscTarget));

