var rotate = function(nums, k) {
    if(nums.length<2) return nums;

    var reverse=function(l,r){
        while(l<r){
            var temp=nums[l];
            nums[l]=nums[r];
            nums[r]=temp;
            l++;
            r--;
        }
    }
    var n=nums.length;
    k=k%n;
    reverse(0,n-1);
    reverse(0,k-1);
    reverse(k,n-1);
    return nums
};