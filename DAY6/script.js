let arr=[12,32,3221,3223,23,44,22,24,60];
// let newary = arr.map(x=>x*2);
// console.log(newary);
let even =arr.filter((x) => x%2==0).reduce((x,y)=>x+y,0);
console.log(even);

// let sum = arr.reduce((x,y)=>x+y,0);
// console.log(sum);

const students = [
    { name: 'Rishabh' ,score:50 },
    { name: 'Agrawal' ,score:45 },
    { name: 'Harsh' ,score:46 },
    { name: 'Kishan' ,score:56 }
 ];
 
 let newar = students
 .filter((student) => student.score > 60)
 .map((students) => students.score*2)
 .reduce((x,y) => x+y,0);
 console.log(newar);

//  let newar2 = students.map((students) => students.score*2)
//  console.log(newar2)

