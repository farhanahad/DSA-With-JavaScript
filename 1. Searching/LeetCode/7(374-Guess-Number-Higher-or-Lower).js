var guessNumber = function(n) {
  let left=1;
  let right=n;
  
  while(left<=right){
    let mid=Math.floor((left+right)/2);
    let ans=guess(mid);
    if(ans===0){
        return mid;
    }
    if(ans===-1){
        right=mid-1;
    }
    if(ans===1){
        left=mid+1;
    }
  }
};
