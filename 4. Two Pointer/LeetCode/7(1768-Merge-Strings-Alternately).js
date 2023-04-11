var mergeAlternately = function(word1, word2) {
    let merged=[];
    for(let i=0;i<(word1.length+word2.length);i++){
        merged.push(word1[i]);
        merged.push(word2[i]);

    }
    return merged.join('');
};