// 12/32
//Introduction to DOM in javascript - interacting with browser using JS
// DOM - document object model
// alert('Hey there! I am an Alert');
// const value = prompt("whats your name","Ash");
// console.log(value);

// window.console.log("Ash"); // window object is avaiblae globally
// console.log(window);

// console.log(document);
// console.log(document.body);
// document.write("This is hacked");

// const name = prompt("What's your name?");
// document.write("Hello" + name);
// mdn docs

//13/32
// Query Selector
//query selector
/*
selectors
-tag name
-id #
-class .
*/
// const body = document.querySelector('body');
//console.log(body);
// body.innerHTML = "<h1>hacked</h1>"
// console.log(body.innerHTML); //you can change an access body html
// const div = document.querySelector('div');//selects the firsy div
// div.innerHTML = "<h1>Hacked</h1>" 
//queryselectorall will select all the divs
// const code = document.querySelector('code');
// code.innerHTML = "alert('hey')"
// const span = document.querySelector('#username');
// span.innerText = '<h1>AST</h1>'
// // span.innerHTML = '<h1>AST</h1>'
// console.log(username.innerHTML);
// const block = document.querySelector('.block');
// console.log(block.innerHTML);
// const div = document.querySelector('div');
// console.log(div.children); //returns all children inside div
// console.log(div.parentElement);
// console.log(div.parentElement.children);
// const ele = document.querySelectorAll(".block");
// ele.forEach((e)=> {
//     console.log(e.innerHTML);
// });
//14/32
//Select Element By ID
// const el = document.getElementById("username");
// // console.log(el);
// console.log(el);
// el.innerHTML = "John Doe";
// // el.classList.add('red-color',"underline");
// console.log(el.classList)
// el.classList.remove('red-color');
// el.style.textDecoration = "underline";
// el.style.color = 'tomato';
// el.parentElement.style.background = "grey";
// el.setAttribute('Aria','123');
// el.remove();
//15/32
//get elements by classname
// const el = document.getElementsByClassName('block');
// console.log(el);
// for(let i = 0;i<el.length;i++){
//     // console.log(el.item(i));
//     el.item(i).style.background = 'blue';
// }
// Select elements by class name
//        const elements = document.getElementsByClassName('block');
//        // Convert HTMLCollection to an array and remove elements
//         while(elements.length > 0) {
//             elements[0].parentNode.removeChild(elements[0]);
// }

//16/32
//event listener

// function handleButtonClicked(){
//     console.log("Clicked");
//     alert("I a Clicked");
// }

// const el = document.getElementById("clickButton");
// el.onclick = function(){
//     console.log("clickeddd")
// }

// const el = document.getElementById("clickButton");
// el.onclick = () => {
//     console.log("clickeddd")
// }

// preferred
// el.addEventListener("click",function(){
//     console.log("clickeddd");
// })

// function doSomething(){
//     console.log("clickeddd");
// }
// el.addEventListener("click",doSomething);


// const task = document.getElementById("task");
// const el = document.getElementById("clickButton");

// function toggle(){
//     if(task.style.color == "red"){
//         task.style.color = "blue";
//     } else{
//         task.style.color = "red";
//     }
    
// }
// el.addEventListener("click",toggle);


// const allChildren = document.querySelector("body").children
// // console.log(allChildren);
// for (let i = 0; i< allChildren.length; i++){
//     allChildren.item(i).addEventListener("click", () => {
//         allChildren.item(i).remove();
//     })
// }


// creating dynamic elements in DOM

// const button = document.getElementById('clickButton');
// const container = document.getElementById('myContainer');

// button.addEventListener("click",()=>{
//     const el = document.createElement("h1");
//     el.innerText = "ASH";
//     container.appendChild(el)
// })

// const button = document.getElementById('clickButton');
// const container = document.getElementById('myContainer');
// count = 1;
// button.addEventListener("click",()=>{
//     const el = document.createElement("li");
//     el.innerText = count;
//     container.appendChild(el)
//     count++;
// })


//Promises in JS
// sync and async
// synchronous task are always in sync. They execute top to bottom in sync.
//  asycn task wait
// let a = 10;
// let b = 20;
// let result = a+b;

// // console.log(result); //this is sync task

// // let resultFromServer = fetch("https://jsonplaceholder.typicode.com/posts");

//preferred
// async function getData(){  //run it asyncly
//     let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts"); //async and await
//     // console.log(resultFromServer);
//     console.log(await resultFromServer.json());
// }


// getData();// gives output promise pending- implies I promise to give you the output in some time.
// console.log(result);//first the sync functions gives output then the async does

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data) =>{console.log(data)})
// .catch((error)=>{error});


// 19/32

const button = document.getElementById("searchButton");
const input = document.getElementById("cityInput")
const cityName = document.getElementById("cityName")
const cityTemp = document.getElementById("cityTemp")
button.addEventListener("click",async()=>{
    // console.log(input.value)
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.name}`;
    cityTemp.innerText = `${result.main.temp}`;
})
 
async function getData(cityName){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a9f6d0c308fb756cc9fed17da1364526&units=metric`)
    return promise.json();
}

