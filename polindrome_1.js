function polindrome(word){
   let arr = word.split('');// разбивает слово на буквы и возвр массив
   arr = arr.reverse();
   const wordRev = arr.join('');
   //const check = word == wordRev;
   return (word == wordRev)
}
//const pol = polindrome('снонс');
console.log (polindrome('снонс'));