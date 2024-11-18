// sayhello = () => {
//     console.log("i am in hello function")
// };

// console.log("task started");
// setTimeout(sayhello , 3000)
// sayhello();
// console.log("task end")


console.log('start');
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log('third task completed')
        },3000);
    },2000);
},1000);
console.log("End")

