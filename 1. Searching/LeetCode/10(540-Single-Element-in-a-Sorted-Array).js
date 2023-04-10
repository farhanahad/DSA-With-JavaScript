const singleNonDuplicate = (nums) => {
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      const middle = Math.floor(left + (right - left) / 2);
      if (middle % 2 === 0) {
        if (nums[middle] === nums[middle + 1]) left = middle + 2;
        else right = middle;
      } else {
        if (nums[middle] === nums[middle - 1]) left = middle + 1;
        else right = middle - 1;
      }
    }
    return nums[left];
  };
  console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))