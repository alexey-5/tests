const f1 = ()=>(console.log("f1"));
const f2 = ()=>(console.log("f2"));
const f3 = ()=>(console.log("f3"));

f1();
setTimeout( f2,5000)
f3();