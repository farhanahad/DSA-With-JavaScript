var flipAndInvertImage = function(image) {
  for(let i=0;i<image.length;i++){
    let left=0;
    let right=image[i].length-1;
    while(left<right){
        let temp=image[i][left];
        image[i][left]=image[i][right];
        image[i][right]=temp;
        left++;
        right--;
    }
  }  
  for(let i=0;i<image.length;i++){
    for(let j=0;j<image[i].length;j++){
        if(image[i][j]==0){
            image[i][j]=1;
        }
        else if(image[i][j]==1){
            image[i][j]=0;
        }
    }
  }
  return image;
};