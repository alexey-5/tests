/* let res = []
for(let i=0; i<5; i++ ){
   res.push(
      function(){
         console.log(i)
      }
   )
}
res[1]() */
//console.log(res)
function f(s) {
  // let value = Math.random();
 
   return function(ww) { console.log(Math.random()+s+ww); };
 }
 
 // три функции в массиве, каждая из них ссылается на лексическое окружение
 // из соответствующего вызова f()
 const uu=f(' случ.число');
 uu(2);
 uu(5);
 
