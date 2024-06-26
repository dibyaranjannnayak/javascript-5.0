// const ese = "null";
// switch(ese) {
// //     case "orange" :
// //         console.log("orange");
// //         break;
// //     case "apple" :
// //         console.log("apple");
// //         break;
// //     case "mango" :
// //         console.log("mango");
// //         break;

// //     default :
// //         console.log("hi there!");
// // }
// var int=1;
// switch(int) {
//     case 1 :
//         console.log("1");
//         break;
//     case 2 :
//         console.log("2");
//         break;
//     default :
//         console.log("helo there!");
// }
 
//  let int = 1,s=0;
//  for (int; int<=5; int++){
//   s=s+int;
//   console.log(s);
//  }

//for-of loop
//it iterate on string and array
//example
// let str = "dibya";
// for(let i of str){
//     console.log(i);
// // }
// let int = "32334";
// for (let i of int) {     //we cannot use it for integer/
//     console.log(i);
// }

//for-in loop
//it iterates over objects(key-value pair)
//example

let student = {      //left side part is key(name,age,gender)
                    //right side part is value(dibya,22,male)
    name: "dibya",
    age : 22,
    gender: "male" ,

}
for(let i in student){
    console.log("key:", i, "value:",student[i]);
}