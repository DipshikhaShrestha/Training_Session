const request = require("request");
const getUserDetail1 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v1",
                    data: body,
                });
            }
        );
    });
};
const getUserDetail2 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v2",
                    data: body,
                });
            }
        );
    });
};

//Normal Promise
getUserDetail1()
.then ((result) => {
    console.log("User Details", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});

//Promise.all
Promise.all([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Details of the users from both API", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});

//Promise.race
Promise.race([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Results from the first fulfilled API ", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});

// //iterators
// let result = ["getUserDetail1", "getUserDetail2"];
// //for of: array element provide garcha
// for(let result of getUserDetail1){
//     console.log("getUserDetail1.data", result);
// };

// //object: array object provide garcha
// let objectExample = {
//     name: "Dipa",
//     age: 20,
//     address: "kathmandu",
// }
// //for in
// for(let obj in objectExample){
// console.log("objectExample", objectExample[obj]);
// }
// console.log(Object.keys(objectExample));
// console.log(Object.values(objectExample));