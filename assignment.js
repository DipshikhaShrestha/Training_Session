//  const http = require("http");


// http.request(" ").then((response) =>{
//     console.log("response");
// });

const getApi = () => {
    return new Promise((reslove, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if(error){
                   reject(error); 
                }
                reslove(body);
            }
        );
    });
};

// getApi()
// .then((result) => {
//  console.log("Api", result);
// })

// .catch((error) => {
//     console.log("Error", error);
//    });