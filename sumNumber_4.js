// возвращает сумму цифр
/* function sum(NumberIn){
  let NModule = Math.abs(NumberIn);
  let arr = (String(NModule)).split('');
  return arr.reduce((akk,el)=>akk+Number(el),0);
} */

//const sum = (NumberIn) => Math.abs(NumberIn).toString().split('').reduce((akk, el) => akk + Number(el),0);

/* const sum = (NumberIn) => {
   const arr =  Math.abs(NumberIn).toString().split('');
   let sum = 0;
   arr.forEach(el => {
      if(Number(el)) sum = sum + Number(el);
      console.log(Number(el))
    });
    return sum;
}; */

const sum = (NumberIn) => Math.abs(NumberIn).toString().split('').reduce((akk, el) =>
    {if(Number(el)) return akk + Number(el)
      else return akk}
   ,0);

console.log(sum(-343.4))