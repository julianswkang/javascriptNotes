//this will primarily be used to store things that I learn on FreeCodeCamp

//utilizing a class to create an object, which also contains getters and setters

class Thermostat{
    constructor (fahrenheit){
      this.temp = fahrenheit;
    }
  
    get temperature(){ //getting the temp from fahrenheit into celsius
      return (5/9) * (this.temp-32);
    }
    set temperature(celsius){ //setting the temp from fahrenheit to celsius
      this.temp = (celsius * 9 / 5) + 32;
    }
  }

  
  //making a new object, thermos, with a temp of 76 in fahrenheit
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  console.log(thermos); //{ temp: 76 }
  
  //creating a new object with thermos' fahrenheit temp in celsius
  let temp = thermos.temperature; 
  console.log(temp);// 24.44 in Celsius
  
  //setting the thermos object's temp to fahrenheit from the passed in celsius temp, 26
  thermos.temperature = 26;
  console.log(thermos); //{ temp: 78.8 }
  
  //setting the temp object's temperature to thermos' fahrenheit temp in celsius 
  temp = thermos.temperature; 
  console.log(temp); // 26 in Celsius
  
//Promise functions
//when your task completes, you either fulfill or fail to fulfill your promise 
//resolve and reject are parameters passed in the promise function
//use resolve when you want your promise to succeed, reject when you want it to fail

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
 //can use then methods to do something once the promise is fulfilled
 //result comes from the argument from the resolve method
  makeServerRequest.then(result => {
    console.log(result); //"We got the data"
  });
 //can use catch methods when your promise is rejected
 //result comes from the argument from the reject method
 //executed immediately after promise is rejected 
  makeServerRequest.catch(error => {
    console.log(error); //"Data not received"
  })

//REGULAR EXPRESSIONS
//Test method

//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
//and returns true or false if your pattern finds something or not.

let myString = "Hello, World!";
let myRegex = /Hello/; 
let result = myRegex.test(myString); //looking for Hello inside of myString
//result == true;
//if myRegex = /hello/; --> result = false --- the test function is case sensitive

// //This is powerful to search single strings, but it's limited to only one pattern. 
// //You can search for multiple patterns using the alternation or OR operator: |.
// //This operator matches patterns either before or after it. 
// //For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString); //result == true;

// //Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
// //Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
// //You can match both cases using what is called a flag. 
// //There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// //You can use it by appending it to the regex.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString); //result == true

//Match method
//You can also extract the actual matches you found with the .match() method.
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

//Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
//'string'.match(/regex/);
///regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log(result); //logging result below:
// [
//     'coding',
//     index: 18,
//     input: "Extract the word 'coding' from this string.",
//     groups: undefined
//  ]

//To search or extract a pattern more than once, you can use the g flag.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //the g flag looks for multiples, the i flag ignores case sensitivity 
let result = twinkleStar.match(starRegex); 
console.log(result); //[ 'Twinkle', 'twinkle' ]

// MATCHING WORDS WITH THE WILDCARD CHARACTER 
//The wildcard character . will match any one character. The wildcard is also called dot and period. 
//You can use the wildcard character just like any other character in the regex. 
//For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
//can put wildcard character at the beginning as well
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); //true
huRegex.test(hugStr); //true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/g; 
let result = unRegex.test(exampleStr); //true

// MATCHING WORDS WITH SPECIFIC LETTERS INSIDE THE WORD
// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog. 
// You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //["big"]
bagStr.match(bgRegex); //["bag"]
bugStr.match(bgRegex); //["bug"]
bogStr.match(bgRegex); //null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex);
console.log(result); //[ 'e','a','e','o','u','i','e','a','o','e','o','e','I','a','e','o','o','e','i','o','e','o','i','e','i' ]

//MATCHING RANGE OF LETTERS WITHIN A WORD
//Inside a character set, you can define a range of characters to match using a hyphen character: -.
//For example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); //["cat"]
batStr.match(bgRegex); //["bat"]
matStr.match(bgRegex); //null

//MATCHING RANGE OF LETTERS AND NUMBERS
//Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
//For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
//Also, it is possible to combine a range of letters and numbers in a single character set.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 
console.log(result); //['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i','o', 's']

//You could also create a set of characters that you do not want to match. 
//These types of character sets are called negated character sets.
//To create a negated character set, you place a caret character (^) after the opening bracket 
//and before the characters you do not want to match.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; //looking for letters that are NOT a,e,i,o,u or numbers
let result = quoteSample.match(myRegex); 
console.log(result); //[ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]


//match a character (or group of characters) that appears one or more times in a row. 
//This means it occurs at least once, and may be repeated.
//You can use the + character to check if that is the case. 
//Remember, the character or pattern has to be present consecutively. T
//hat is, the character has to repeat one after the other.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
console.log(result); //[ 'ss', 'ss' ]

//There's also an option that matches characters that occur zero or more times.
//The character to do this is the asterisk or star: *.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; //looking for 'o' 0 or more times
soccerWord.match(goRegex); //["goooooooo"]
gPhrase.match(goRegex); //["g"]
oPhrase.match(goRegex); //null

//In an earlier challenge, you used the caret character (^) inside a character set 
//to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
//Outside of a character set, the caret is used to search for patterns at the beginning of strings.
//this only works with the test method! if use match method, it will find things that are NOT that character 

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); //true
console.log(firstString.match(firstRegex));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); //false
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal); 
console.log(result); //true

//There is also a way to search for patterns at the end of strings.
//You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //false
