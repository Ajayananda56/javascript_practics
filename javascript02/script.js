// let correctPassword = "1234";
// let attempts = 3;
// let success = false;

// for (let i = 1; i <= 3; i++) {
//   let userInput = +prompt("Enter your password:");
//   if (userInput === correctPassword) {
//     console.log("Access granted");
//     success = true;
//     break;
//   } else {
//     console.log(`incorrect password and you attempts left ${3 - i}`);
//   }
// }
// if (!success) {
//   console.log("Account locked");
// }

// let word;

// let yesCount = 0;
// while (true) {
//   word= prompt("Enter a word (type 'stop' to end):")
//   if(word=== "stop"){
//     break;
//   }
//   if(word === "yes"){
//     yesCount++;
//   }
// }
// console.log(`you typed yes ${yesCount} times.`)





// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// let result = "";
// for(let i=1; i<=50; i++){
//   if(i%7===0){
//     result += i + ", "
//   }
// }
// console.log(result)

// let sum = 0;

// for(let i=1; i<=30; i++){
//   if(i%2!==0){
//     sum += i
//   }
// }
// console.log(`total sum of all odd numbers is ${sum}`)

// let num;

// while (true) {
//   num = parseInt(prompt("Enter a number"))
//   if(num % 2===0){
//     console.log("you entered an even number",num)
//     break;
//   } else{
//     console.log("you entered a odd number, try again")
//   }
// }

//completed till 15 number of questions

// let start = parseInt(prompt("Enter start number"))
// let end = parseInt(prompt("enter end number"))

// for(let i = start; i <= end; i++){
//   console.log(i)
// }