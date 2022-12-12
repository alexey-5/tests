/* function hello(name){
   let message = 'добрый день '+name;
   return(
      function(){console.log(message)}
   )
}
//const elena = hello('Елена');
//elena()
hello('Елена')() */
function names(){
  const list = ["Анна","Сергей","Юрий"]
    return {
       print: function(){console.log(list)},
       add: function(name){list.push(name)}, 
       del: function(){list.shift()} 
    }
}
const manager = names();
manager.print()
manager.add("Пётр")
manager.print()
manager.del()
manager.print()