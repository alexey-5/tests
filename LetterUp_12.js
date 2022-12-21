// Принимает предложение, возвращает его со всеми словами с заглавной буквы
/* const LetterUp = (str)=>{
   const str2 = str.split(' ');
   let str3 = [];
   str2.forEach((el)=>{
      const arr = el.split('');
      arr[0] = arr[0].toUpperCase();
      str3.push(arr.join(''));
   });
   console.log(str3.join(' '));
} */
const LetterUp = (str) => 
   str.split(' ')
   .map((word) => word[0].toUpperCase() + word.slice(1))
   .join(' ');
   console.log(LetterUp('Objects can be extended and will inherit the properties and methods'))