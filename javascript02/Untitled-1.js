// 1) for loop (Basics → Patterns)
// Q1. 1 se 5 tak numbers print karo

// for (let i=1; i <=5; i++){
//     console.log(i)
// }

// Q2. 1 se 10 tak even numbers (sirf even)

// for (let i =1; i<=10; i++){
//    if(i %2 ===0) console.log(i)
// }

// for(let i = 1; i<=10; i++){
//     if(i %2===0) console.log(i)
// }

// Q3. Sum of first N numbers (N = 5)

// let sum =0;

// for (let i=1; i<=5; i++){
//     sum =+ i
// }
// console.log(sum)

// for(let i =1; i<=5; i++){
//     sum =+i;
// }
// console.log(sum)

// Q4. Reverse counting (10 to 1)

// for(let i=10; i>=1; i--){
//     console.log(i)
// }

// for(let i=10; i>= 1; i--){
//     console.log(i)
// }

// Q5. Star pattern (right triangle)

// let str = ""
// for(let i=1; i<=5; i++){
//     str += "*"
// }
// console.log(str)

// 2) while loop (Condition-first control)

// let i = 1;

// while (i<=10) {
//     console.log(i)
//     i++
// }

// let i =1;
// while (i<=10) {
//     console.log(i)
//     i++
// }

// Q2. Sum until 100 cross ho (1 se add karte jao)

// let sum =0, i =1;
// while (sum<=100) {
//     sum+=i;
//     i++;
// }
// console.log(sum)

// const arr = [10, 20, 30]

// let idx = 0;
// while (idx < arr.length) {
//     console.log(arr[idx])
//     idx++
// }

// const arr = [10, 20, 30]

// let idx = 0;
// while (idx < arr.length) {
//     console.log(arr[idx])
//     idx++;
// }

// Q4. Guessing style (simulate 3 tries)

// let tries = 3;
// while(tries > 0){
//     // supposed user guess is wrong
//     console.log("wrong guess")
//     tries --;
// }

// Q5. Remove last elements until length=2

// const nums = [5, 6, 7, 8];

// while (nums.length > 2) {
//     nums.pop()
// }
// console.log(nums)
// while (nums.length > 2) {
//     nums.pop()
// }
// console.log(nums)

// 3) do...while (Run at least once)
// Q1. Run once even if condition false

// let i = 5;
// do {
//     console.log("run once")
//     i++;
// } while (i < 0);

// let i = 5;
// do {
//   console.log("run once");
//   i++;
// } while (i < 0);

// Q2. Menu simulation (run until choice valid) – simplified

// javascript cohort 2.0
// let sehipass = "harsh"
// let first = prompt("pehela password")
// if(first === sehipass){
//     console.log("done")
// } else{
//     let second = prompt("pehela password")
// }
// ek bar password define karo
// let sehipass = "harsh";
// let userpassword = prompt("apna password daalo")

// // ek bar password pucho

// while(userpassword !== pass){
//     console.log("galat password")
//     userpassword = prompt("dobara password daalo")
// }
