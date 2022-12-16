//преобразование строки  "авРРа" в "А-Вв-Ррр-Рррр-Ааааа"
/* const transform = (str) => {
   const arr = str.split('');
   const arr2 = arr.map((el, index) => {//map не меняет массив
      let row = el.toUpperCase();
      for (let i = 0; i < index; i++) row = row + el.toLowerCase();
      return row;
   })
   return arr2.join('-'); 
}*/
const transform = (str) => {
   const arr = str.split('');  //map не меняет arr
   const arr2 = arr.map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))//repeat не меняет el

   return arr2.join('-');
}
console.log(transform("Вопросы"))