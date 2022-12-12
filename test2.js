function f1(){
   const arrName =["Анна","Вадим","Андрей"];
   return {
     print: ()=>console.log(arrName),
     read: ()=>arrName,
     add: function(el){arrName.push(el)},
     addStart(el){arrName.unshift(el);}
   }
}
const names = f1();
//console.log(Name);
//names.read();
names.add("Сергей");
let arr=names.read();
console.log(arr)
//names.print();
