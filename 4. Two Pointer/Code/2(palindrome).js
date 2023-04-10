let str="farhan";

function isPalindrome(str){
    let a=0;
    let b=str.length-1;
    
    while(a<=b){
        if(str[a]===str[b]){
            a++;
            b--;
        }
        else{
            return false;
        }
    }
    return str;
}
console.log(isPalindrome(str));