//&& AND condtional operator 
//where true true = true
// false, true = false 
// true, false =  false

// OR operator ||
//where true true = true
// false, true = true

//If and else example

// const age = 35;
// if (age<=20){
//     console.log("You are in teen age.");
// } else if ( age> 20 && age <= 29){
//     console.log("You are in your tweenty\'s. ");
// }else{
//     console.log("You are old.");
// }


// let day = 'sunday';
// switch (day){
//  case 'monday':
//     console.log('it is monday');
//     break;

//     case 'tuesday':
//         console.log('it is tuesday');
//         break;
    
//         case 'sunday':
//             console.log('it is sunday');
//             break;
//         default:
//             console.log('your week is not avaliable here');
// } 

// let counter = 0;
// while (counter <=10){
//     console.log('Numbers are: ', counter);
//     counter++;
// } //prints upto 10

// for(let i=0; i<10; i++) { // i ko value 0   i is less than 10 ani   i is incremented
//  console.log('Value of i is: ', i)
// } //prints upto 9

// for(let i=10; i>=1; i--) { // i ko value 10   i is greater or euqal to 1 ani   i is decreased
//     console.log('Value of i is: ', i)
//    } //prints 10 to 1 

for(let i=10; i>=1; i--) { 
    if(i === 5){ //5 sama run huncha ani 5 aayepachi break huncha
        break; //stop garaucha
    }
    if(i ===9){
        continue; //arko ma chai continue gar like arko loop ma pathaucha
    }
    console.log('Value of i is: ', i)
   }

