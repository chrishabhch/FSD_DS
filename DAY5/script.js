// function display()
// {
//     // alert("Hello JS");
//     console.log("hello js")
// }
// display();

// let obj = {
//     'name': 'Rishabh',
//     id: 135,
// }
// console.log(typeof obj);
// console.log(obj)

// let arr =[12,21,34,3,1];
// console.log(arr)
// console.log(typeof arr)


function validate()
{
   let x=document.getElementById("un").value;
   let y=document.getElementById("pass").value;

   if(x=="Rishabh" && y=="admin"){
    // alert("login")
    document.getElementById('res').innerHTML ="Login success";
   }
   else 
   document.getElementById('res').innerHTML ="Login Failed";
//    alert("incorrect username or password")
}

// let xx =Number("12");
// let str=Number("123");
// let b = boolean(0);
// console.log(typeof xx);
// console.log(typeof str);
// console.log(b);
// console.log(typeof b);



// let a =12;
// let c ='12';
// console.log(a==c);
// console.log(a===c);


// let a=() =>{
//    console.log("hello");
// };

// a();

// let aa = (x,y) => {
//     console.log(x+y);
// }
// aa(12,31);

let aa = (x,y) => {
    return(x+y);
}

let x=aa(12,21);
console.log(x);

let say=()=> console.log("Hello");
say();

function display()