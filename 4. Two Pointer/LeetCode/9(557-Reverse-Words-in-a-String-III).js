var reverseWords = function(s) {
  const tokens=s.split(' ');
  for(let i=0;i<tokens.length;i++){
    const characters=tokens[i].split('');
    characters.reverse();
    tokens[i]=characters.join('');
  }
  return tokens.join(' ');
};
 
