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
// let timerType;

// let test = document.getElementById("test");
// let letterCount = document.getElementById("letterCount");
// letwordCount = document.getElementById("wordCount");
// let getData = document.getElementById("getData");

// getData.addEventListener("input", () => {
//     // let value = getData.value;

//     console.log(getData.value);

//     clearInterval(timerType);

//     timerType = setTimeout(() => {
//         console.log("Time is up");
//         getData.setAttribute("readonly", "true");
//     }, 2000);
// });


// Array MAp , filter

// let arr = [1, 20, 3, 40, 5];

// let newArr = arr.map((v) => v > 5);

// if (val > 5) {
//     return val;
// } else {
//     return 0;
// };

// console.log(newArr);


// let items = document.getElementById("items");

// let ul = [
//     { item: "One", display: "show" },
//     { item: "Two", display: "hide" },
//     { item: "Three", display: "show" },
//     { item: "Four", display: "hide" },
//     { item: "Five", display: "show" }];

// ul.map((v) => {
//     let li = document.createElement("li");
//     li.innerHTML = v.item;
//     items.appendChild(li);

//     if (v.display === "hide") {
//         li.style.display = "none";
//     }else {
//         li.style.display = "block";
//     }
// });




// filter

// let arr = [1, 20, 3, 40, 5];

// let newArr = arr.filter((v) => v > 5);

// console.log(newArr);

// let items = document.getElementById("items");

// let ul = [
//     { name: "Ali" },
//     { name: "Ahmed" },
//     { name: "Sarjeel" },
//     { name: "Asim" },
//     { name: "Adeel" }
// ];

// ul.filter((v) => v.name.startsWith("A")).map((v) => {
//     let li = document.createElement("li");
//     li.innerHTML = v.name;
//     items.appendChild(li);
// });


// find
