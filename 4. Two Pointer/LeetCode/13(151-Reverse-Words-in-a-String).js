var reverseWords = function(s) {
    let arr=s.split(' ');
    let result='';
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]=='') continue;
        if(result.length>0) result+=' ';
        result+=arr[i];
    }
    return result;
};