function missingNumber(nums){
    let sum=0;
    for(let i=0;i<=nums.length;i++){
        sum=sum+i;
    }

    let sum2=0;
    for(let i=0;i<nums.length;i++){
        sum2=sum2+nums[i];
    }
    return sum-sum2;
}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));