var reversePrefix = function(word, ch) {
    let indexCh=word.indexOf(ch);
    let reverseStr='';
    let str='';

    for (let i=indexCh;i>=0;i--){
        reverseStr+=word[i];
    }
    for(let i=indexCh+1;i<word.length;i++){
        str+=word[i];
    }
 
    return (reverseStr+str)
};