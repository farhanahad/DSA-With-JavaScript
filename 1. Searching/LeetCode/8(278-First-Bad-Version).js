var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=1;
        let right=n;
        let ans=0;

        while(left<=right){
            let mid=parseInt((left+right)/2);
            if(isBadVersion(mid)){
                ans=mid;
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }
        return ans;
    };
};