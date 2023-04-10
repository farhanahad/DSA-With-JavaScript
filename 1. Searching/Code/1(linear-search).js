let arr =[10,20,3,15,35,100]
const target=3;

function  linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return `${target} is found at index ${i}`
        }
    }
    return `${target} is not found in the array`
}
console.log(linearSearch(arr,target))