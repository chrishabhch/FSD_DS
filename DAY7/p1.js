// const myPromise = new Promise((resolve, reject) => {
//     let success=true;
//     setTimeout(() => {
//         if(success)
//             {
//                 resolve("Data Send Successfully");
//             }else{
//                 reject("Data failed to send");
//             }
//     } ,4000)
   
// });

// myPromise
// .then((message) =>{
//     console.log("Data Received "+message)
// })
// .catch((err)=>{
//     console.log("Failed to fetch data: "+err)
// })


function task(message, delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

task("first task" , 1000)
.then(() => task("second task",2000))
.then(() => task("this task is completed",3000));
