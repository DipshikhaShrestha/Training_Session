// const getHelloWorldPromise = () =>{
//     return new Promise((resolve, reject) =>{
//       resolve("There was error");
//     });
//   };
//   // console.log(getHelloWorldPromise()); //pending state
//   getHelloWorldPromise()
//     .then((result) => {
//   console.log("result", result);
//   })
//   .catch((error) =>{
//       console.log("error", error);
//   })
//   .finally(() => console.log("Request completed"));

// const getUserList = () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//      resolve(["Dips", "Dinesh"]);

//        }, 5000);
//     });
// };
// getUserList().then((students)=>{
//  console.log("sucess",students);
// })
// .catch((error) => console.log(error))

// .finally(() => console.log("Request completed")); //arguement is always empty last ma use huncha.

// Promise.all kati promises pass gareako cha euta ma error aayo vani aru lai wasta nagareara .catch ma gayea error falcha
// const promise1 = () =>
// new Promise((resolve, reject) => {
// setTimeout(() =>{
//   resolve("Promise 1");
// }, 1000);
// });

// const promise2 = () =>
// new Promise((resolve, reject) => {
// setTimeout(() =>{
//   resolve("Promise 2");
// }, 2000);
// });

// Promise.all([promise2(), promise1()]).then((result) => {
//   console.log("Promise all:",result);
// }).catch((error) => {
//   console.log("Error:", error);
// });

//promise.race 2ota promises ma race garni
// Promise.race([promise2(), promise1()]).then((result) => {
//   console.log("Promise race:",result);
// }).catch((error) => {
//   console.log("Error:", error);
// });

