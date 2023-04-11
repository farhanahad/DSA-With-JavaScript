var findMedianSortedArrays = function (nums1, nums2) {
   
    const mergedArrays = nums1.concat(nums2);
    mergedArrays.sort((a, b) => a - b);

  
    const middleLeft = Math.floor(mergedArrays.length / 2);

    
    if (mergedArrays.length % 2) {
       
        return mergedArrays[middleLeft];
    } else {
       
        return (mergedArrays[middleLeft] + mergedArrays[middleLeft + 1]) / 2;
    }
};