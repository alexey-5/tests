// поиск самого короткого слова
function wordShort(words){
   let arr = words.split(' ');
   arr.sort((a,b)=>a.length-b.length);//возвращает массив, но и сам arr меняется
   return arr[0];
}
const result = wordShort('элементы преобразуются в строки при сравнении');
console.log (result);