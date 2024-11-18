function fetchdata(){
    return new Promise((resolve,reject) =>{
        const students = [
            { name: 'Rishabh' ,score:50 },
            { name: 'Agrawal' ,score:45 },
            { name: 'Harsh' ,score:46 },
            { name: 'Kishan' ,score:56 }
         ];
        setTimeout(()=>{
            resolve(students);

        } ,3000);
    });
}

fetchdata().then((data) => {
    console.log(data);
    let sum = data.map((x) => x.score).reduce(x,(x,y) => x+y,0);

    console.log(sum);
})
.catch((err) => {
    console.log(err);
});

// let arr1 = students.map((students) => students.score)
// console.log(arr1)