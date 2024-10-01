// //Piyush Garg - Ultimate Javascript Tutorial
// // 1/32
// // Javascript is  a programming language for web applications
// // Internal Linking - inside HTML file and external linking - in separate js file
// // console.log("This is a hello from external js file");

// // 2/32
// //Variables in js
// //var, let, const
// // var age = 22;
// // console.log(age)
// // num1 = 10
// // num2 = 20
// // console.log(num1+num2);

// //datatype varName = value; (strongly typed language); javascript is a loosely typed language

// // age = "Ash"
// // console.log(age);

// // Naming Conventions
// // firstname
// // first_name
// // FirstName Classes
// //  firstName (Pref) Cammel Casing


// // var -> Global
// // if (true){
// //     var age = 40
// // }

// //if you print age before declaring,here age will be undefined because var is a global variab;e. u cant do this with let and const
// // console.log(age)
// // var age = 10

// // let => local

// // let age = 22
// // if(true){
// //     let a = 20;
// // }
// // console.log(a); // cannot access variable a because let has local scope

// //const => local, once assigned cannot change value
// // const age = 22;
// // console.log(age);

// // var || let || const
// // var = Global
// // reassign
// // can access anywhere

// // let - local
// // reassign
// // can access only on block(within scope)

// // const - local
// // cannot reassign
// // can access only on block(within scope) [90% of time you will use const]


// // 3/32
// // Data Types and Operators
// // Numbers
// // Strings
// // booleans
// // NULL
// // Undefined
// // Objects

// // Numbers
// let num1 = 3.42 //type number
// let num2 = 10
// console.log(num1+num2);

// // strings
// const firstName = 'Ash';
// const lastName = 'Tupe'
// console.log(firstName + ' ' + lastName);

// // Booleans (1 and 0)
// // let isLoggedIn = true;
// // console.log(isLoggedIn);

// // NULL
// let lastLoginDate = null; //type:any
// //null means that the space is used but the space doesnot contain anything, whereas 
// // undefined means it doesnt exist in the memory.

// // Objects
// // const person = {
// //     firstName:  'Ash',
// //     lastName: 'Tupe',
// //     age: 24,
// //     isLoggedIn:false,
// //     lastLoginDate: null, //good practice to add ','
// // }// person is an object
// // console.log(person);
// // console.log(person.firstName);

// // Operators
// console.log(num1+ num2 + 3)
// console.log(num1*3)

// // in js - true - 1 and false is 0
// var isLoggedIn = false; 
// console.log(isLoggedIn+10);
// isLoggedIn = true; 
// console.log(isLoggedIn+10);

// // string '1' + 1
// console.log('1'+1);
// console.log('1'+11);
// console.log('2'*11); // string * number = number
// console.log('a'*1); // NaN - Not a number

// // Typeof operator
// // console.log(typeof '123');
// // console.log(typeof person);
// // console.log(typeof person.age);

// // 4/32
// // Conditional Statements and switch case in JS
// // let age = 22;
// // if (age>= 18){
// //     console.log("Yes you can vote");
// // } else{
// //     console.log("No you can't vote");
// // }

// // age = 6
// // if (age >= 80){
// //     console.log("Yes you are adult");
// // } else if (age>= 18){
// //     console.log("No you can't vote");
// // }else{
// //     console.log("No you can't vote");
// // }

// // Ternary Operator
// // const age = 90;
// // age >= 18? console.log("Yes") : console.log('No');
// // let result = age >= 18? "Yes" : 'No';
// // console.log(result);

// // Switch Case
// // const option = 2;
// // switch(option){
// //     case 1: console.log('Case 1');
// //     break;
// //     case 2: console.log('Case 2');
// //     break;
// //     case 3: console.log('Case 3');
// //     break;
// //     default: console.log('Invalid Option');
// // }
// let a = 30;
// let opt = '*';
// let b = 40;

// switch(opt){
//     case '+': console.log(a+b);
//     break;
//     case '-': console.log(a-b);
//     break;
//     case '*': console.log(a*b);
//     break;
//     case '/': console.log(a/b);
//     break;
//     default: console.log('Invalid operator');
// }



// //5/32
// // Logical Operators
// // AND | OR | NOT

// //AND- > All conditions must be true &&
// const age = 5;
// const gender = 'female';

// if (age >= 18 && gender == 'female'){
//     console.log("you are an adule female")
// }

// // OR => Any one condition must be true ||

// if (age >= 18 || gender == 'female'){
//     console.log("you are an adule female")
// }

// // NOT -> If true then will become false and vice versa !

// const number = 7
// if (number % 2 != 0){
//     console.log("Odd");
// }


// // 6/32
// // Loops
// // for, while, do while

// // for loop- if you know how many times to loop
// for(let i = 1; i <= 10; i = i+2){
//     console.log('ash'+i);
// }

// // while loop - you dont know how many iterations
// let ip = 0;
// let house = 50;

// // while(ip != house){
// //     ip = ip + 1;
// //     console.log('Step Take: ' + ip);
// // }
// // ip = 0
// // do while
// // do{
// //     ip = ip+1;
// //     console.log("steps taken: " + ip);
// // }while(ip<=house)

// // guess the number
// // let n = 40;
// // let guess = 0;

// // do{
// //     guess = parseInt(prompt("Guess a number"));
// //     if (guess == n){
// //         alert("Winner");
// //         break;
// //     }
// // }while(guess!=0)

// // 7/32
// // Funtions - A block that performs a task

// function sayHello(){
//     console.log("Hello Ash");
// }
// sayHello(); //calling a function

// //parameters
// function add(a,b){ // a and b are arguments
//     console.log(a+b);
// }
// add(4,5) // 4 and 5 are parameters

// function multiply(a,b){
//     return a*b;
// }
// multiply(3,4)

// let res = multiply(3,7);
// console.log("Hey user, the result is " + res);

// //function to accept unlimited arguments
// function addNumbers(){
//     // console.log(arguments);
//     let ans = 0;
//     for(let i = 0; i < arguments.length; i++){
//         ans = ans+arguments[i];
//     }
//     return ans;
// }
// let result = addNumbers(10,20);
// console.log(result)

// // spread operator
// function addNumbersv2(...numbers){ //can use any variable name instead of numbers
//     let ans = 0;
//     for(let i = 0; i < numbers.length; i++){
//         ans = ans+numbers[i];
//     }
//     return ans;
// }
// let ans = addNumbersv2(20,20);
// console.log(ans);



// // 8/32
// // Arrow functions
// // 1. Syntax
// // function sayHello(){
// //     console.log("Hello");
// // }

// // const sayHello = () => {    //Arrow Functions
// //     console.log("Hi");
// // }

// // const addition = (a,b) => {
// //     return a+b;
// // }
// // const addition = (a,b) => a+b;  //one liner function
// // console.log(addition(2,3));


// // 2. 'arguments' keyword

// //function to accept unlimited arguments
// function addNumbers(){
//     // console.log(arguments);
//     let ans = 0;
//     for(let i = 0; i < arguments.length; i++){
//         ans = ans+arguments[i];
//     }
//     return ans;
// }
// let as = addNumbers(10,20);
// console.log(as)
// arguments can only be used in normal function and not arrow functions
//to use unlimited parameters we have to use the spread operator

// const addNumbers = (...nums) =>{
//     console.log(nums);
// }
// addNumbers(1,343,1,1)

// 3. Hoisting
//hoisting works in normal functions but not in arrow functions
//hoisting means that you can call a function and then define it like below.
// sayHello();
// function sayHello(){
//     console.log("Hello");
// }

// 4. This keyword //imp
// const obj = {
//     value: 20,
//     myfunction: function(){
//         console.log("Value is "+this.value); //20
//     },
// }
// obj.myfunction();

// const obj = {
//     value: 20,
//     myfunction: () => {
//         console.log("Value is "+this.value); //undefined
//     },
// }
// obj.myfunction();

// this is a window object. it points the caller in normal function, but in arrow function it points the window object



// 9/32
// High order function and callback in JS
// High order function -> A function that takes a function as an argument 
// function add(a,b, cb){  //cb is callback, add is high order function
//     let result =  a+b;
//     cb(result);
//     return () => console.log(result);
// }

// add(2,4,function(val){
//     console.log(val)
// });

// add(2,4,val => console.log(val)); // for time consuming tasks

// let resultFunction = add(2,4,()=>{});
// resultFunction();
// problem with callback - callback hell -> hence promises came into picture



// 10/32
//Arrays
// store multiple values in one variable

const students = ['Ash','John','James','Bill'];
console.log(students);
console.log(students.length);
console.log(students[0]);
students[0] = "Ash Patil";
console.log(students);
// cannot assign a different value to students but you can change the value inside of the students
// cannot change student variable, but can change values inside it.

students.push('Alex');  //adds value at the end of the array
students.push('Harshu');
console.log(students);

// Arrays are homogeneous in some languages - either all the values are int or string or etc datatype.
// but in javascript you can have multiple datatype values

// const myArr = ['ash',1,'😄',true];  //arrays are heterogeneos in JS
// myArr.push({name:"Ash Patil"});
// console.log(myArr);
// console.log(myArr.indexOf(1));
// console.log(myArr.indexOf("nsd fj")); //return -1 if value doesnt exist


// students.pop();
// console.log(students);

// students.reverse();
// console.log(students);



//11/32
// Arrays High order functions- forEach, map, find, findIndex, includes, filter, slice, splice, 
// function print(n){
//     console.log(n);
// }
// students.forEach(print); // prints all the vaues of students. it just means whatever function we pass as argument will be applied to all the values in students
// students.forEach((val)=>console.log(val));

// students.map((val) => console.log(val));

// difference between forEach and map is that map return a new array whereas forEach doesnt return anything

// const numbers = [1,2,3,4,5,6,7];
// let newArr = [];
// newArr = numbers.forEach((num)=> num*2);
// console.log(newArr) //output - undefined, because forEach doesnt return anything

// const numbers = [1,2,3,4,5,6,7];
// function double(n){
//     return n*2;
// }
// let newArr = numbers.forEach(double);
// console.log(newArr)

const numbers = [1,2,3,4,5,6,7];
// function double(n){
//     return n*2;
// }
// let newArr = numbers.map(double);
// console.log(newArr)

// console.log(numbers.find((num)=>num==2*2)) //Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// console.log(numbers.findIndex((num)=>num==2*2)) //because indexof 4 is 3

// console.log(numbers.includes(3)); //Determines whether an array includes a certain element, returning true or false as appropriate.

// const newArr = numbers.filter((num)=> num%2==0);
// console.log(newArr);

// let newArr = numbers.slice(1,5) //start index to end+1
// let newAr = numbers.slice(5) //start index to end+1
// let newA = numbers.slice(0,5) //start index to end+1
// let Arr = numbers.slice() //start index to end+1
// console.log(newArr);
// console.log(newAr);
// console.log(newA);
// console.log(Arr);

let newArr = numbers.splice(1,4); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(newArr);
console.log(numbers);
