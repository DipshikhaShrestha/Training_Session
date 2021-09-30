// const makeStringUpperCase = (string) => {
//     return string.toUpperCase();
// };
// const makeStringLowerCase = (string) => {
//     return string.toLowerCase();
// };

// // console.log(makeStringUpperCase("Hello", makeUpperString));
// // console.log(makeStringLowerCase("Hello", makeLowerString));

// const passUserInput = (input, callback) => {
//  input = "Hello" + input;
//  return callback(input);
// };

// console.log(passUserInput("IIMS", makeStringLowerCase))
// console.log(passUserInput("IIMS", makeStringUpperCase))

// //one line function for callback
// const add = (a , b) => a + b;
// const subtract = (a , b) => a - b;
// const multiply = (a , b) => a * b;

// const callBackExample =(a , b , mathCallBack) => {
//     console.log(mathCallBack(a , b));
// }
// //function le function pathyo ani unction callback garyo
// callBackExample(2 , 2, add);
// callBackExample(2 , 2, multiply);
// callBackExample(2 , 2, subtract);

// //"" ma rakhda string ma "" sign nahuda chai concat ma jancha ani 12 print huncha
// let a = "1";
// let b = "2";
// //console.log(a + b);
// console.log(parseInt(a) + parseInt(b));
// //parseInt changes into number ani add huncha 

let a = 2;
a = a + a; // a +=a;
console.log(a);