// //array to store multiple value 
// //index starts from 0

// let exampleArray = [1, 2, 3, 4, 5];
// console.log(exampleArray.length);
// console.log(exampleArray[exampleArray.length - 1]);

// //spread operator in array also in object

// let array1 = ["apple", "mango"];
// let array2 = ["orange", "grape"];
// console.log([...array1, ...array2]);

// let object1 = {
//     name: "Dipa",
//     age: 20,
// };

// let object2 = {
//     address: "kathmandu",
//     college: "IIMS",
// };
// let object3 = {...object1, ...object2};

// let{name, age, address, college} = object3;
// // console.log(...object1, ...object2 );

//PUSH
//array ko last element ma value add garna push add garcha
// let pushExample = ["apple", "grape"];
// pushExample.push("orange");
// console.log("pushExample",pushExample);

//pop last ko element hatauna 

//shift removes first element of array

//usnshift add new example

//splice insert garna ni milcha remove garna ni milcha
//1 is index ani 0 is item
//1, 0 rakhda chai sabai add garcha 
//1, 1 or 2 rakhyo vani chai hataidincha

//slice
//original array ma chai kei gardaina
//sliceArray ma chai creates new array
// let sliceExample = ["apple", "bannana"]

// let sliceExample = ["apple", "bannana", "avocado", "orange", "kiwi"];
// //forEach loop array ko each element nasakesama run vairuncha
// sliceExample.forEach

// let fruits = ["apple", "bannana", "grapes","orange"];
// fruits.forEach(value, index) = > {
//     console
// }

// let numbers = [1,2,3,4,5];

// let newNumbers = numbers.map((value, index) => {
//     return value * 2;
// })
// console.log("numbers", numbers);
// console.log("newNumbers", newNumbers);

//map creates new aray
//

// let name = ["dips","shi","stha"];
// console.log(name);

// let upperCaseName = name.map((value, index)=>{
//     return value.toUpperCase;
// });
// console.log(upperCaseName);

//filter example
// let agesArray = [15,20,30];
// let aboveTwenty = agesArray.filter((age) =>{
//     return age >20;
// });
// console.log("agesArray", agesArray);
// console.log("aboveTwenty", aboveTwenty);

//using for loop
// let arr = [1,2,3,4,5];

// for(let i=0;i<arr.length; i++){
// console.log (arr[i]);
// }

//delete

//iterators
let countryArray = ["nepal","china","india","japan"];
//for of: array element provide garcha
for(let country of countryArray){
    console.log("country", country);
};

//object: array object provide garcha
let objectExample = {
    name: "Dipa",
    age: 20,
    address: "kathmandu",
}
//for in
for(let obj in objectExample){
console.log("objectExample", objectExample[obj]);
}
console.log(Object.keys(objectExample));
console.log(Object.values(objectExample));