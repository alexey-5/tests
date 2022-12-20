// Подсчёт гласных в строке
const gl = (str)=>{
  const arrGl = ['a','e','i','o','u'];
   let count = 0;
   for(let item of str){
      if(arrGl.includes(item.toLowerCase())) count++
   }
   console.log(count)
}
gl('Documents7WWW=Users-glasn')