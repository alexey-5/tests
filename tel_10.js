/* const tel = (num)=>{
   const arr = String(num).split('');
   return `(${arr[0]+arr[1]+arr[2]}) ${arr[3]+arr[4]+arr[5]}-${arr[6]+arr[7]+arr[8]}`
} */
const tel = (num)=>{
   const telStr = String(num);
   return `(${telStr.slice(0,3)}) ${telStr.slice(3,6)}-${telStr.slice(6,9)}`
}
console.log(tel(878990565))