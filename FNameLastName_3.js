// Иван иванов >  И.И.
function FLname(str) {
   let arr = str.split(' ');
   const first = arr[0].split('');
   const last = arr[1].split('');
   const FL = first[0].toUpperCase() + '.' + last[0].toUpperCase() + '.';
   return FL;
}

console.log(FLname("какой-то конкретный"))