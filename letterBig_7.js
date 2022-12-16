//Вернуть массив с номерами заглавных букв -  "сиНонИМы"
const indexLetter = (word)=>{
   const arr = word.split('');
   const arrFinal = [];
   arr.forEach((el,index) => {
      if(el===el.toUpperCase()) arrFinal.push(index);
   });
   return arrFinal;
}
console.log(indexLetter("сиНонИМы"));