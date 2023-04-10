function orderAgnosticBinarySearch(arr,target){
    var start=0;
   var end=arr.length-1;  
  // find whether the array is sorted in ascending or descending
  var isAscending;
  if(arr[start]<arr[end]){
      isAscending=true;
  
  } else{
      isAscending=false;
  }
  while(start<=end){
      var mid=Math.floor((start+(end-start)/2));
      if(arr[mid]===target){
          return mid;
      }
      if(isAscending){
  // ascending orders will be applied here
          if(arr[mid]<target){
              start=mid+1;
          }
          else{
              end=mid-1;
          }
      }
      else{
          // descending orders will be applied here
          if(arr[mid]<target){
              end=mid-1;
          }
          else{
              start=mid+1;
          }
      }
  }
  return `${target} is not found in the array`;
  }
  //lets test our code
  const arr=[12,7,7,6,5,2,1]
  const target=3;
  console.log(orderAgnosticBinarySearch(arr,target))
  