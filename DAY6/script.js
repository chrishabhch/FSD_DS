let arr=[12,32,3221,3223,23,44,22,24,60];
// let newary = arr.map(x=>x*2);
// console.log(newary);
let even =arr.filter((x) => x%2==0).reduce((x,y)=>x+y,0);
console.log(even);

// let sum = arr.reduce((x,y)=>x+y,0);
// console.log(sum);
