//set time out: takes callbacks, function rakhcha ani kati milli sec ma run garni vanera dincha ani certain time pachi exit huncha

const printHelloWorld = () => {
    console.log("Hello world, is the example of timeout");
};

let counter = 0;
const printHelloWorldInterval = () => {
    counter++;
    console.log("counter:", counter);
    // console.log("Hello world, is the example of timeInterval");
};
setTimeout(printHelloWorld, 5000);
//1 sec = 1000 millisec, so 5000millisec= 5sec
//hence aba 5000milli sec pachi matra run garni vaneako


//set interval
setInterval(printHelloWorldInterval, 2000);