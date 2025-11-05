//Destructuring
// const person = {name: "Ajay", age: 20}
// const {name, age} = person
// console.log(name,age)

// const arr = [10, 20, 30]
// const [a, b] = arr;

// console.log(a,b)

//spread and rest operator

// const arr = [1, 2]
// const arr1 = [3, 4]

// const merged =[...arr, ...arr1]

// function sum(...nums) {
//     return nums.reduce((a, b)=> a + b)
// }
// console.log(sum(1, 2, 3, 4, 5))


// let a =10;
// let b = 20;

// console.log(a-b)

// let x = 5;
// x/= 3

// console.log(x)

// let count = 5;
// console.log(count)
// count--;
// console.log(count)
// --count
// console.log(count)

// let x = 10;

// if(x>20 && x <1 && x ===10){
//     console.log("x is 10")
// } else{
//     console.log("x is not 10")
// }

// console.log(b)

// let b = 10;

// test()
// function test() {
//     console.log("test run")
// }

// var hello
// hello()
// hello = function () {
//     console.log("Hi")
// }

// console.log(a)
// let a = 12;

//template literals

// const name = "Ajay";
// console.log(`Hello ${name}, welcome to JS!`)

//async js Promise

// const fetchData = new Promise((resolve, reject)=>{
//     let success = true;
//     success? resolve("Data mil gaya") : reject("Error")
// })

// fetchData
//     .then(res => console.log(res))
//     .catch(err =>console.log(err))

// async function getData() {
//     try {
//         const data = await fetchData;
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()

//closures (important interview concepts)

// function counter() {
//     let count = 0;
//     return function () {
//         count ++;
//         console.log(count)
//     }
// }
// const myCounter = counter()
// myCounter()
// myCounter()
// myCounter()

// Prototype & Inheritance

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hello i am ${this.name}`)
// }

// const ajay = new Person("Ajay")
// ajay.sayHello()

//Modules (ES6 import/export)
//math.js

// export function add(a, b) {
//     return a +b;
// }
// //math.js
// import {add} from './math.js'
// console.log(add(2,3))

//Event Loop & Call Stack

// console.log("start")
// setTimeout(() => {
//     console.log("time out")
// }, 0);
// Promise.resolve().then(()=>console.log("Promise"))
// console.log("End")

// function greet(name) {
//     return `Hello ${name}`
// }

// const sayHello = greet; //store in variable
// console.log(sayHello('Ajay'))

// function calculator(a,b,operation) {
//     return operation(a,b)
// }

// function add(x,y) {
//     return x + y
// }

// function multiply(x,y) {
//     return x * y;
// }
// console.log(calculator(3, 6, add))
// console.log(calculator(30, 10, multiply))

//example 2 function rendering function

// function greeting(message) {
//     return function (name) {
//         return `${message}, ${name}`
//     }
// }

// const sayHi = greeting("Hi")
// console.log(sayHi("Ajay"))

console.log("hello")

console.log("hello")