// let getData = document.getElementById("getData");

// let count = document.getElementById("count");

// let countValue = () => {
//     let value = getData.value;
//     count.innerHTML = value.length;

//     // if (getData.value.length > 10) {
//     //     Inputvalue = getData.value.slice(0, 10);
//     //     getData.value = Input.value;
//     // }
//     // if (getData.value.length > 10) {;
//     //     getData.value = getData.value.slice(0, 10);
//     // }
// }
// getData.addEventListener("input", countValue);


// Switch Case Statements

// let day = prompt("Enter the day");
// switch (day) {
//     case day:
//         console.log("Today is Monday"); 
//         break;
//     case day:
//         console.log("Today is Tuesday");       
//         break;
//     case day:
//         console.log("Today is Wednesday");
//         break;
//     case day:
//         console.log("Today is Thursday");
//         break;
//     case day:
//         console.log("Today is Friday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// Promises

// let promise = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {     
//         resolve("Success");
//     } else {
//         reject("Failed");    
//     }
// });
// promise.then((message) => {     
//     console.log("This is in the then " + message);
// }).catch((message) => {     
//     console.log("This is in the catch " + message);
// }); 

// Timeout & Interval

// let btn = document.getElementById("btn");

// let count = 0;

// let callFunc = () => {
//     count++;
//     if (count == 5) {
//         clearInterval(interval);
//     }
//     console.log(count);
// };

// let interval = setInterval(callFunc, 2000);

// btn.addEventListener("click", () => {
//     clearInterval(interval);
// });


// ClassPractice
let timerType;

let test = document.getElementById("test");
let letterCount = document.getElementById("letterCount");
letwordCount = document.getElementById("wordCount");
let getData = document.getElementById("getData");

getData.addEventListener("input", () => {
    // let value = getData.value;

    console.log(getData.value);

    clearInterval(timerType);

    timerType = setTimeout(() => {
        console.log("Time is up");
        getData.setAttribute("readonly", "true");
    }, 2000);
});