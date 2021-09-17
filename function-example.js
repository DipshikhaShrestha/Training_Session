// //normal function and arrow function-

// function exampleFunction(firstName, lastName){ //function= keyword, exampleFunction= name
//  return firstName + " " + lastName;
// }

// const getFullName = (firstName, lastName) => firstName.toLowerCase() + " " + lastName.toUpperCase();
// //return garera pani garna milcha tara one line code ma garda chai arrow use garna milcha
// //fast and clean code dikhincha arrow use garda
// console.log(exampleFunction("Ram", "Shita"));
// console.log(getFullName("Ram", "Shita"));

// let person = {
// firstName: "Dipa",
// lastName: "Shrestha",
// age: "20",
// address: "Kathmandu",
// getFullName: function ( ){

// }

// }

//regular function
function printOut(content){
    console.log(content);
}


//arrowfunction
//const rakhda modify gardaina let rakhda chai modify garnba milcha

const arrowPrintOut = (content) => console.log(content);

arrowPrintOut("Arrow Hello Word");

let car = {
    name: "Toyota",
    model: "M10",
    price: 3000,
    getNameInUpperCase: function(){
        return this.name.toUpperCase();
    },
    getTotalPriceWithVat: function(){
        return (13/100 * this.price) + this.price;
    }
}
{
 console.log(car);
 console.log(car.getNameInUpperCase());
 console.log(car.getTotalPriceWithVat());
}