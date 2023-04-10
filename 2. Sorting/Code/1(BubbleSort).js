

let arr= [10, 5, 12, 7, 8, 3, 100, 60, 10, 8, 7]

function bubbleSort(arr){
    //Ascending order
    let temp;
    for(let i=0;i<arr.length;i++){
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
  
                // If the condition is true
                // then swap them
                 temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}


bubbleSort(arr);
