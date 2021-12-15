// ////////////////////////////
// //     Challenge 1
// ////////////////////////////

// function repeater(char, n = 5) {
// 	//base case
//   if (n==1) {return char;}
  
  
//   //recursive case
//   return char + repeater(char,n-1);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(repeater('g')); // -> 'ggggg'
// // console.log(repeater('j'));// -> 'jjjjj'


// ////////////////////////////
// //     Challenge 2
// ////////////////////////////


// function isEven(n) {
// 	//base case
//   if(n === 1) return false
//   if(n===0) return true
//   //recursive case
//   return isEven(n-2);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(isEven(0)); // -> true
// // console.log(isEven(5)); // -> false
// // console.log(isEven(10)); // -> true



// ////////////////////////////
// //     Challenge 3
// ////////////////////////////


// function factorial(num) {
// 	if(num === 0) return 1;
//   return num*factorial(num-1);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(factorial(4)); // -> 24
// // console.log(factorial(6)); // -> 720
// // console.log(factorial(0)); // -> 1




// ////////////////////////////
// //     Challenge 4
// ////////////////////////////

// function getLength(array, i = 0) {
//   //base case
// 	if(array[i] === undefined) return i
  
//   return getLength(array, i+1);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(getLength([1])); // -> 1
// // console.log(getLength([1, 2])); // -> 2
// // console.log(getLength([1, 2, 3, 4, 5])); // -> 5


// ////////////////////////////
// //     Challenge 5
// ////////////////////////////


// function pow(base, exponent) {

//   if (exponent == 1) return base
  
  
//   return base * pow(base, exponent - 1);
  
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// // console.log(pow(2, 4)); // -> 16
// // console.log(pow(3, 5)); // -> 243

// ////////////////////////////
// //     Challenge 6
// ////////////////////////////


// function flow(input, funcArray, i = 0){
// 	if(funcArray.length === i) return input;
//   input = funcArray[i](input);
//   return flow(input,funcArray, i + 1);
// }

// // To check if you've completed the challenge, uncomment this code!
// // function multiplyBy2(num) { return num * 2; }
// // function add7(num) { return num + 7; }
// // function modulo4(num) { return num % 4; }
// // function subtract10(num) { return num - 10; }
// // const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// // console.log(flow(2, arrayOfFunctions)); // -> -7



// ////////////////////////////
// //     Challenge 7
// ////////////////////////////


// function fib(n) {
// 	//base case
//   if (n < 2) return n;
  
//   //recursive case
//   return fib(n-1) + fib(n-2)
// }

// // To check if you've completed the challenge, uncomment this code!

// // // console.log(fib(1)); // -> 1
// // // console.log(fib(2)); // -> 1
// // // console.log(fib(3));
// // // console.log(fib(4));
// // // console.log(fib(5));
// // // console.log(fib(6));
// // // console.log(fib(7)); // -> 13


// ////////////////////////////
// //     Challenge 8
// ////////////////////////////
// // let overall = [];
// // function headsOrTails(n, combo = [], hot="heads"){
// //   if(n===0) return combo.push(hot);
// //   return headsOrTails(n-1,"heads")
  
// // }

// function headsOrTails(n){
//   const overall = [];
  
//   function recurseThrough (n, combo=[]){
//     if (combo.length == n){
//       overall.push(combo);
//       return;
//     }
    
//     recurseThrough(n, [...combo, "heads"]);
//     recurseThrough(n, [...combo, "tails"]);
//   }
  
//   recurseThrough(n);
//   return overall;
// }

// // To check if you've completed the challenge, uncomment this code!
// //console.log(headsOrTails(2)); // -> [
// 															//			['heads', 'heads'],
// 															//			['heads', 'tails'],
// 															//			['tails', 'heads'],
// 															//			['tails', 'tails'],
// 															//		]


// //console.log(headsOrTails(3)); // -> [
// 															//      ['heads', 'heads', 'heads'],
// 															//      ['heads', 'heads', 'tails'],
// 															//      ['heads', 'tails', 'heads'],
// 															//      ['heads', 'tails', 'tails'],
// 															//   		['tails', 'heads', 'heads'],
// 															//   		['tails', 'heads', 'tails'],
// 															//   		['tails', 'tails', 'heads'],
// 															//   		['tails', 'tails', 'tails'],
// 															// 		]
// 							// 3	   H						T
// 							// 2	H   T      	H		T
// 							// 1	H T H  T	  H  T H  T
// ////////////////////////////
// //     Challenge 9
// ////////////////////////////

// function getAllCombos(arr) {
// 	let overall = [];
// 	let count = arr.length;
  
//   function recurseThrough(arr, count, combos=[]){
//     if (combos.length == count){
//       overall.push(combos);
//       return;
//     }
    
//     for (let i = 0; i < count; i++){
//       recurseThrough(arr, [...combos,arr[i]], count-1);
//     }

//   }
//   recurseThrough(arr, count);
//   return overall;
  
// }

// // To check if you've completed the challenge, uncomment this code!
// console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
// // console.log(getAllCombos(['a', 'b', 'c']));
// // -> [
// //   ['a', 'b', 'c'],
// //   ['a', 'b'],
// //   ['a', 'c'],
// //   ['a'],
// //   ['b', 'c'],
// //   ['b'],
// //   ['c'],
// //   [],
// // ]





// function reverseInt(int, rev = 0) {
//      if(int < 1) return rev
//      return reverseInt( Math.floor(int / 10), (rev * 10 + int % 10) )
// }