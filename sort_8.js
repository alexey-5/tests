// Вывод числа, либо f3 либо f5 либо f3-5, если оно кратно 3,5, 3и5
const print35 = index => {
   const arr = [];
   for(let i=1;i<=index;i++){
      if(i%3===0 && i%5===0) arr.push('f3-5');
       else if(i%3===0 ) arr.push('f3');
       else if(i%5===0 ) arr.push('f5');
       else arr.push(i);
   }
   console.log(arr.join(' == '))
}

print35(15);