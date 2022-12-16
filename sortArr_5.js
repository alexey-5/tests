// Наименьшее и наибольшее значение в массиве
// [33,4,56,2,58,7,84] вернуть массив [min,max]
/* const minMax = (arr)=>{
   return [arr.sort((a,b)=>a-b)[0],arr.sort((a,b)=>b-a)[0]]
} */
const minMax = (arr)=>{
   return [Math.min(...arr),Math.max(...arr)]
}


console.log(minMax([33,4,56,2,58,7,84]))