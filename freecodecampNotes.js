//this will primarily be used to store things that I learn on FreeCodeCamp

//utilizing a class to create an object, which also contains getters and setters

// class Thermostat{
//     constructor (fahrenheit){
//       this.temp = fahrenheit;
//     }
  
//     get temperature(){ //getting the temp from fahrenheit into celsius
//       return (5/9) * (this.temp-32);
//     }
//     set temperature(celsius){ //setting the temp from fahrenheit to celsius
//       this.temp = (celsius * 9 / 5) + 32;
//     }
//   }

  
//   //making a new object, thermos, with a temp of 76 in fahrenheit
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   console.log(thermos); //{ temp: 76 }
  
//   //creating a new object with thermos' fahrenheit temp in celsius
//   let temp = thermos.temperature; 
//   console.log(temp);// 24.44 in Celsius
  
//   //setting the thermos object's temp to fahrenheit from the passed in celsius temp, 26
//   thermos.temperature = 26;
//   console.log(thermos); //{ temp: 78.8 }
  
//   //setting the temp object's temperature to thermos' fahrenheit temp in celsius 
//   temp = thermos.temperature; 
//   console.log(temp); // 26 in Celsius
  
//Promise functions
//when your task completes, you either fulfill or fail to fulfill your promise 
//resolve and reject are parameters passed in the promise function
//use resolve when you want your promise to succeed, reject when you want it to fail

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
//  //can use then methods to do something once the promise is fulfilled
//  //result comes from the argument from the resolve method
//   makeServerRequest.then(result => {
//     console.log(result); //"We got the data"
//   });
//  //can use catch methods when your promise is rejected
//  //result comes from the argument from the reject method
//  //executed immediately after promise is rejected 
//   makeServerRequest.catch(error => {
//     console.log(error); //"Data not received"
//   })

//REGULAR EXPRESSIONS
//Test method

//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
//and returns true or false if your pattern finds something or not.

// let myString = "Hello, World!";
// let myRegex = /Hello/; 
// let result = myRegex.test(myString); //looking for Hello inside of myString
// //result == true;
// //if myRegex = /hello/; --> result = false --- the test function is case sensitive

// //This is powerful to search single strings, but it's limited to only one pattern. 
// //You can search for multiple patterns using the alternation or OR operator: |.
// //This operator matches patterns either before or after it. 
// //For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString); //result == true;

// //Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
// //Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
// //You can match both cases using what is called a flag. 
// //There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// //You can use it by appending it to the regex.

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// let result = fccRegex.test(myString); //result == true

//Match method
//You can also extract the actual matches you found with the .match() method.
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

//Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
//'string'.match(/regex/);
///regex/.test('string');

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; 
// let result = extractStr.match(codingRegex); 
// console.log(result); //logging result below:
// [
//     'coding',
//     index: 18,
//     input: "Extract the word 'coding' from this string.",
//     groups: undefined
//  ]

//To search or extract a pattern more than once, you can use the g flag.

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; //the g flag looks for multiples, the i flag ignores case sensitivity 
// let result = twinkleStar.match(starRegex); 
// console.log(result); //[ 'Twinkle', 'twinkle' ]

//The wildcard character . will match any one character. The wildcard is also called dot and period. 
//You can use the wildcard character just like any other character in the regex. 
//For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
//can put wildcard character at the beginning as well

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr); //true
// huRegex.test(hugStr); //true

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/g; 
// let result = unRegex.test(exampleStr); //true

