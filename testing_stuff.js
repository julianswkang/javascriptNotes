let str = "hello world"; //testing slice and split

// console.log(str.slice(3)); //lo world
// console.log(str.slice(3,7)); //lo w
//SLICE CUTS THE STRING VARIABLE, STARTING AT THE INDEX THAT IS PASSED (INCLUSIVE) UNTIL THE INDEX IT IS STOPPED (EXCLUSIVE)
//RETURNS A STRING

// console.log(str.split(" ")); //[ 'hello', 'world' ]
// console.log(str.split("")); //['h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']
// console.log(str.split()); //[ 'hello world' ]
//SPLIT CUTS THE STRING AND PUSHES EACH CUT AS AN ELEMENT INTO AN ARRAY. THE SIZE OF THE PARAMETER DICTATES HOW MUCH SPACE BETWEEN EACH CUT
//RETURNS AN ARRAY

let arr = [0, 1, 2, 3, 4, 5, 6]; //testing splice
// arr.splice(1,0, "hello"); //mutates the arr array by adding in "hello" into the 1 index position
// console.log(arr); //[ 0, 'hello', 1, 2, 3, 4, 5, 6 ]
// console.log(arr.splice(3,2,4)); //[ 2, 3 ] //splice will return the elements that were removed, which was at index 3. 
//                                             //two items were removed and the number 4 was added at index 3
// console.log(arr); //[ 0, 'hello', 1, 4, 4, 5, 6 ] //the arr array was mutated by the splice function
//SPLICE IS USED ON AN ARRAY, AND RETURNS AN ARRAY

let arr2 = ["cat", "dog", "world"];
// console.log(arr2.join("")); //catdogworld
// console.log(arr2.join(" ")); //cat dog world
// console.log(arr2.join()); //cat,dog,world
// console.log(arr2.reverse()); //[ 'world', 'dog', 'cat' ]
//JOIN WORKS ON AN ARRAY, COMBINES THE ELEMENTS INTO A STRING
//REVERSE WORKS ON AN ARRAY, REVERSES THE ORDER OF THE ARRAY

let arr3 = ["cat", "dog", "world"];
// console.log(arr3.reverse().join("")); //worlddogcat

let str2 = "hello world";
// reverseStr2 = str2.split("").reverse().join("");
// console.log(reverseStr2); //dlrow olleh



//Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the input array
//[1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

function exclusiveSum(arr) {
    //initialize an empty output array
    let outputArr = [];
    
    //utilize a for loop to iterate through the array
    for (let i = 0; i < arr.length; i++){
      //return an array that does not have the element at index i
      let arrLoop = arr.filter((element) => {
        return element != arr[i];
      })
      //take the sum of the values in the filtered array
      let sum = arrLoop.reduce((acc, curr) =>{
        return acc+curr;
      },0);
      //push the sum of those values into the output array
      outputArr.push(sum);
    }
  
  return outputArr;
    //return the output array
  }
  
  function exclusiveSumTests() {
    console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
    console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
    console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
    console.log(exclusiveSum([1]), ' -> ', [0]);
  }
  
  exclusiveSumTests() // uncomment to test
  
  
  //similar to exclusive sum, but for products
  function exclusiveProduct(arr) {
    //initialize an empty output array
    let outputArr = [];
    
    //utilize a for loop to iterate through the array
    for (let i = 0; i < arr.length; i++){
      //return an array that does not have the element at index i
      let arrLoop = arr.filter((element) => {
        return element != arr[i];
      })
      //take the sum of the values in the filtered array
      let sum = arrLoop.reduce((acc, curr) =>{
        return acc*curr;
      },1);
      //push the sum of those values into the output array
      outputArr.push(sum);
    }
  
  return outputArr;
    //return the output array
  }
  
  function exclusiveProductTests() {
    console.log(exclusiveProduct([1,3,4,2]), ' -> ', [24, 8, 6, 12]);
    console.log(exclusiveProduct([1]), ' -> ', [0]);
  }
  
  exclusiveProductTests();
  



// //creating an object via classes with getters and setters
// class Thermostat{
//   constructor (fahrenheit){
//     this.temp = fahrenheit;
//   }

//   get temperature(){ //getting the temp from fahrenheit into celsius
//     return (5/9) * (this.temp-32);
//   }
//   set temperature(celsius){ //setting the temp from fahrenheit to celsius
//     this.temp = (celsius * 9 / 5) + 32;
//   }
// }
// // Only change code above this line

// //making a new object, thermos, with a temp of 76 in fahrenheit
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// console.log(thermos); //{ temp: 76 }

// //creating a new object with thermos' fahrenheit temp in celsius
// let temp = thermos.temperature; 
// console.log(temp);// 24.44 in Celsius

// //setting the thermos object's temp to fahrenheit from the passed in celsius temp, 26
// thermos.temperature = 26;
// console.log(thermos); //{ temp: 78.8 }

// //setting the temp object's temperature to thermos' fahrenheit temp in celsius 
// temp = thermos.temperature; 
// console.log(temp); // 26 in Celsius
