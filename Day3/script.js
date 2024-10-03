// const uname = document.getElementById("username");
// const button = document.getElementById("clickButton");
// const name = document.getElementById("name");

// button.addEventListener("click",()=>{
//     const value = uname.value;
//     // console.log(value);
//     localStorage.setItem("name",value);
//     // name.innerText = `${value}`
//     location.reload()
// });

// window.addEventListener("load",()=>{
//     const val = localStorage.getItem('name');
//     name.innerText = val
    
// })

// 21/32
// const input = document.getElementById("cityInput");
// const button = document.getElementById("searchButton");

// async function gotLocation(position){
//     // console.log(position);
//     const result = await getData(position.coords.latitude, position.coords.longitude)
//     console.log(result);
// }

// function failedLocation(){
//     console.log("Location access failed");
// }

// button.addEventListener("click",()=>{
//     navigator.geolocation.getCurrentPosition(gotLocation, failedLocation);//2 callback functions
// })

// async function getData(lat,lon){
//     const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=bc1e9aa097b348b6be501401240310&q=${lat},${lon}&aqi=yes
// `)
//     return promise.json();
// }


//22/32

// function showTime(){
//     const currentTime = new Date();
//     const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
//     // console.log(time);
//     document.getElementById("time").innerText = time; // constant unless you refresh
// }
// // showTime();

// // setTime and setinterval
// // setTimeout works once
// // setinterval works for thatt particular interval

// let interval = setInterval(showTime,1000)

// const button = document.getElementById("stopButton");

// button.addEventListener("click", ()=>{
//     clearInterval(interval);
// })

// stop watch or alarm clock

let time; // Declare a global variable to hold the countdown value
const startTime = document.getElementById("time");
const startButton = document.getElementById("startButton");

function timer() {
    if (time > 0) {
        time--; // Decrease the time by 1
        document.getElementById("timer").innerText = time; // Update the timer display
    } else {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
    }
}

let timerInterval;
startButton.addEventListener("click", () => {
    time = parseInt(startTime.value, 10); // Set the global 'time' variable to the value entered by the user
    if (!isNaN(time) && time > 0) { // Check if the input is a valid number greater than 0
        console.log("Start Time:", time);
        document.getElementById("timer").innerText = time; // Set the initial timer value display
        timerInterval = setInterval(timer, 1000); // Start the interval to call the 'timer' function every second
    } else {
        console.log("Please enter a valid number for the timer.");
    }
});

//closure (imp)
// 23/32
 
//curring (imp)
//composition (imp)
//connecting to bluetooth
// IIFE (imp)

//iterator pattern, generator function, yeild