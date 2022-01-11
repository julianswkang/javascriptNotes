//this will primarily be used to store things that I learn on FreeCodeCamp

//utilizing a class to create an object, which also contains getters and setters

class Thermostat{
    constructor (fahrenheit){
      this.temp = fahrenheit;
    }
  
    get temperature(){ //getting the temp from fahrenheit into celsius
      return (5/9) * (this.temp-32);
    }
    set temperature(celsius){ //setting the temp from celsius to fahrenheit
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
 //can use "then" methods to do something once the promise is fulfilled
 //result comes from the argument from the resolve method
  makeServerRequest.then(result => {
    console.log(result); //"We got the data"
  });
 //can use "catch" methods when your promise is rejected
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


//Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
//This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
//The closest character class in JavaScript to match the alphabet is \w. 
//This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
//Note, this character class also includes the underscore character (_).

//using test to see if the string contains:
let longHand = /[A-Za-z0-9_]+/; //any numbers or letters
let shortHand = /\w+/; //any words
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //true
shortHand.test(numbers); //true
longHand.test(varNames); //true
shortHand.test(varNames); //true

//using match to create a new array
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV1 = /\w/g; 
let result = quoteSample.match(alphabetRegexV1).length; //31 //represents characters

let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+/g; 
let result2 = quoteSample.match(alphabetRegexV2).length; //6 //represents words, modified with the '+'

//use /\W/ (capital W) to match everything but numbers and letters
//can also use /[^A-za-z0-9]
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); //['%']
sentence.match(shortHand); //['!']

//use /\d\ to match all numbers, which is equal to /[0-9]/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; //4

//use /\D/ to match all NON-numbers, which is equivalent to /[^0-9]/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length; //17

//Usernames can only use alpha-numeric characters.
//The only numbers in the username have to be at the end. 
//There can be zero or more of them at the end. Username cannot start with the number.
//Username letters can be lowercase and uppercase.
//Usernames have to be at least two characters long. 
//A two-character username can only use alphabet letters as character
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
// /^[a-z][a-z]+ is looking for two alphabet characters in the beginning  // \d*$ is looking for 0 or more digits at the end
// '|' == or
// /^[a-z] is looking for one alphabet character in the beginning \d\d+$/ is looking for at least two digits at the end
//the 'i' allows us to test without case sensitivity 
let result = userCheck.test(username); //true

//can use /\s/g to test/match for spaces in the string, as well as nonspace elements with /\S/g

//You can specify the lower and upper number of patterns with quantity specifiers. 
//Quantity specifiers are used with curly brackets ({ and })
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);
//will be true for "Ohhh no", "Ohhhhhh no"
//will be false for "Oh no", "Ohhhhhhhh no"

//You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
//Sometimes you only want to specify the lower number of patterns with no upper limit.
//For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); //true
multipleA.test(A2); //false
multipleA.test(A100); //true

//can also do for exact number of patterns with {3} will only look for exactly 3 
let exactA = /ha{3}h/;
let A3 = "haaah";
exactA.test(A3); //true
exactA.test(A4); //false

//all or none
//You can specify the possible existence of an element with a question mark, ?. 
//This checks for zero or one of the preceding element. 
//You can think of this symbol as saying the previous element is optional.
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true

//Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
//You can search and replace text in a string using .replace() on a string. 
//The inputs for .replace() is first the regex pattern you want to search for.
//The second parameter is the string to replace the match or a function to do something.
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
//The replace call would return the string "The sky is blue.""
//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
//The replace call would return the string Camp Code.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText); //"three two one"
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); //"Hello, World!"

//debugging
//can use console.clear() to clear browser console
//You can use "typeof" to check the data structure, or type, of a variable.
//JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String

//basic data structurs
//.slice() returns portion of a string or array (starting index (inclusive), ending index (exclusive))
  //does not modify to original string or array
//.splice() returns a portion of an array (starting index, delete count, ...replacement elements)
  //will modify to original string or array

// spread operator
//ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. 
//The spread syntax simply looks like this: ...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
//thatArray equals [true, true, undefined, false, null]. 
//thisArray remains unchanged and thatArray contains the same elements as thisArray.

//Luckily, JavaScript provides us with another built-in method, indexOf()
//that allows us to quickly and easily check for the presence of an element on an array. 
//indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element
//or -1 if the element does not exist on the array.
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1){
    return true;
  }
  else return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); //false

//returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan 
//and returns false otherwise.
let users = {
  Alan: {age: 27, online: true},
  Jeff: {age: 32, online: true},
  Sarah: {age: 48, online: true},
  Ryan: {age: 19, online: true}
};
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name));
}
console.log(isEveryoneHere(users)); //true

//algorithm practice

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) { //any of these three are effective
  let strEnd = str.slice(-target.length); //takes 3 indices from the end of str
  console.log(strEnd); //ian
  if (strEnd == target) return true;
  return false; 

  let strEnd = str.slice(str.length /*7*/- target.length /*3*/);
  //=str.slice(4) == inclusive starting from index 4
  console.log(strEnd); //ian
  if (strEnd == target) return true;
  return false;

  let reg = new RegExp(target + "$", "i");
  return reg.test(str);

}
confirmEnding("Bastian", "ian"); //true

//Return the length of the longest word in the provided sentence.
//Your response should be a number.
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce((longest, word)=> {
      return Math.max(longest, word.length)
    }, 0);
}

//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number. 
//For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  if (num <= 0) return ""; //base case
  if (num == 1) return str;  //base case
  
  return str+=(repeatStringNumTimes(str,num-1)); //recursive call
}
repeatStringNumTimes("abc", 3); //abcabcabc

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length > num){
    return str.slice(0,num) + "...";
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8); //"A-tisket..."

//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
//This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])){
      num = arr[i];
      return num;
    }
  }
  return num;
}
//OR
function findElement(arr, func){
  return arr.find(func);
}
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
findElement([1, 2, 3, 4], num => num % 2 === 0); //2

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.
function titleCase(str) {
  let chopped = str.split(" ");
  let newWord = "";
  chopped.forEach((element)=> {
    let first = element.slice(0,1);
    first = first.toUpperCase();
    let rest = element.slice(1);
    rest = rest.toLowerCase();
    let combined = first + rest;
    newWord = newWord + " " + combined;
  })
  return newWord;
}
//OR
//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
//The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
//If pattern is a string, only the first occurrence will be replaced.
function titleCase(str) {
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map((val) => {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot");

//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n,0,...arr1);
  return newArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}
//or
function bouncer(arr){
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]); //[ 7, 'ate', 9 ]

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
//and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  let outputArr = arr.sort((a, b) => a - b); //this will sort in numerical order 
  //sort method:
    // > 0	sort b before a
    // < 0	sort a before b
    // === 0	keep original order of a and b

  for (let i = 0; i < outputArr.length; i++){
    if (num <= outputArr[i]){
      //console.log(i);
      return i;
     }
  }
  return outputArr.length; //if iterates through the entire array and num is the largest, will need to place at the end of the array
}
getIndexToIns([5, 3, 20, 3], 5); // 2

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//ex.["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//the arguments ["hello", "hey"] should return false because the string hello does not contain a y.
function mutation(arr) {
  let firstEle = arr[0].toLowerCase();
  let secondEle = arr[1].toLowerCase();
  for (let i = 0; i < secondEle.length; i++){
    if (firstEle.indexOf(secondEle[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "hey"]);//false

//Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i+=size){
    outputArr.push(arr.slice(i,i+size));
  }
  console.log(outputArr);
  return outputArr;
}
//OR
//use recursion
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
chunkArrayInGroups(["a", "b", "c", "d"], 2); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunkArrayInGroups([1, 2, 3, 4, 5], 2); //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

//object oriented programming 

//Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. 
//Think of them as a blueprint for the creation of new objects.

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

//This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 
//Constructors follow a few conventions:
  //Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
  //Constructors use the keyword this to set properties of the object they will create. 
    //Inside the constructor, this refers to the new object it will create.
  //Constructors define properties and behaviors instead of returning a value as other functions might.

  //Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. 
//It would take a lot of time to create all the birds, then change the properties to different values for every one. 
//To more easily create different Bird objects, you can design your Bird constructor to accept parameters:
  function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

//Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs 
  //inside each Bird instance.
//This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
  //That would be a lot of duplicated variables.
//A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. 
//Here's how to add numLegs to the Bird prototype:
Bird.prototype.numLegs = 2;
//Now all instances of Bird have the numLegs property.
console.log(duck.numLegs); //2
console.log(canary.numLegs); //2
//Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. 
//Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
//Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it

//Anytime a constructor function creates a new object, that object is said to be an instance of its constructor
//verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, 
//returning true or false based on whether or not that object was created with the constructor. 
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House; //true

//Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");

//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:
let ownProps = [];
let prototypeProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); //["name"] in the console
console.log(prototypeProps); //["numLegs"]

//A more efficient way is to set the prototype to a new object that already contains the properties. 
//This way, the properties are added all at once:
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! 
//This property can be used to check which constructor function created the instance, 
//but since the property has been overwritten, it now gives false results:
duck.constructor === Bird; //false
duck.constructor === Object; //true
duck instanceof Bird; //true
//whenever a prototype is manually set to a new object, remember to define the constructor property:
Bird.prototype = {
  constructor: Bird, //this is the crucial step if setting the prototype to a new object!!!!!
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

//Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
//For example, here the Bird constructor creates the duck object:
function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:
Bird.prototype.isPrototypeOf(duck); //true

//most objects in javascript have a prototype.. An object's prototype is an object itself
//because a prototype is an object, a prototype can have its own prototype!
//in the case of above, the prototype of Bird is Bird.prototype. The prototype of Bird.prototype is Object.prototype 
//hasOwnProperty, as well as other methods, are defined in Object.prototype... this can be accessed by Bird.prototype AND by duck

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

//there are two ways to create instances of the supertype (or parent)
//using the new operator:
let animal = new Animal ();
//or using Object.create(obj):
//let animal = Object.create(Animal.prototype)
let animal = Object.create(Animal.prototype);
//Object.create(obj) creates a new object, and sets obj as the new object's prototype.
  //By setting the prototype of animal to be the prototype of Animal, 
  //you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype); //this sets the prototype of the subtype, in this case Dog, to be an instance of Animal
let beagle = new Dog(); //beagle inherits all of Animal's properties, including the eat method 
console.log(Dog.prototype.isPrototypeOf(beagle)); //true
console.log(Animal.prototype.isPrototypeOf(beagle)); //true
console.log(Animal.prototype.isPrototypeOf(Dog.prototype)); //true

//When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
//you can manually set the constructor property of Bird to the Bird object
Dog.prototype.constructor = Dog;

//A constructor function that inherits its prototype object from a supertype constructor function 
//can still have its own methods in addition to inherited methods.
//For example, Bird is a constructor that inherits its prototype from Animal:
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
//In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. 
//Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
//Now instances of Bird will have both eat() and fly() methods:

//there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. 
//They can both fly, but a Bird is not a type of Airplane and vice versa.
//For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
let flyMixin = function(obj) { //The flyMixin takes any object and gives it the fly method.
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
let bird = {
  name: "Donald",
  numLegs: 2
};
let plane = {
  model: "777",
  numPassengers: 524
};
flyMixin(bird);
flyMixin(plane);
//Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:
bird.fly(); //Flying, wooosh!
plane.fly();//Flying, wooosh!

//In the previous challenge, bird had a public property name. It is considered public because it can be accessed and 
//changed outside of bird's definition.
//bird.name = "Duffy";
//Therefore, any part of your code can easily change the name of bird to any value. 
//Think about things like passwords and bank accounts being easily changeable by any part of your codebase. 
//That could cause a lot of issues.
//The simplest way to make this public property private is by creating a variable within the constructor function. 
//This changes the scope of that variable to be within the constructor function versus available globally. 
//This way, the variable can only be accessed and changed by methods also within the constructor function.
function Bird() {
  let hatchedEgg = 10; //hatchedEgg is a variable created within the constructor function, no longer available globally
  this.getHatchedEggCount = function() { //this method is priviledged, has access to private variable hatchedEgg
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); //will return 10
//Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
//This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
//In JavaScript, a function always has access to the context in which it was created. This is called closure.

//A common pattern in JavaScript is to execute a function as soon as it is declared:
//This pattern is known as an immediately invoked function expression or IIFE.
(function () {
  console.log("Chirp, chirp!");
})();
//This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.
//Note that the function has no name and is not stored in a variable. 
//The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 

//An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
//For example, an earlier challenge defined two mixins:
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
//We can group these mixins into a module as follows:
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
//Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. 
//This returned object contains all of the mixin behaviors as properties of the object. 
//The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object 
//that can then be used by other parts of your code. Here is an example using it:
motionModule.glideMixin(duck);
duck.glide();

//functional programming

//Functional programming is a style of programming where solutions are simple, isolated functions, 
//without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
//Functional programming is about:
  //Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
  //Pure functions - the same input always gives the same output
  //Functions with limited side effects - any changes, or mutations, to the state of the program outside the function 
    //are carefully controlled

//One of the core principles of functional programming is to not change things. Changes lead to bugs. 
//It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable
//Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
//A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// The global variable
let fixedValue = 4;
function incrementer() {
  return fixedValue + 1; //if you use fixedValue++, this will mutate the global variable itself, whereas this is returning a fixed value + 1
  //note: fixedValue++ is equivalent to fixedValue = fixedValue + 1, which will mutate the global variable
}
console.log(incrementer()); //5
console.log(fixedValue); //4

// Another principle of functional programming is to always declare your dependencies explicitly. 
// This means if a function depends on a variable or object being present, 
// then pass that variable or object directly into the function as an argument.
// There are several good consequences from this principle. 
// The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
// This can give you more confidence when you alter, remove, or add new code. 
// You would know what you can or cannot change and you can see where the potential traps are.
// Finally, the function would always produce the same output for the same set of inputs, 
// no matter what part of the code executes it.
let fixedValue = 4;
function incrementer(value) {
  return value + 1;
}
console.log(incrementer(fixedValue)); //5

// Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
// Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable 
// and not a copy. So changing a value in newArr would change the value in arrVar.
// Declare function parameters - any computation inside a function depends only on the arguments passed to the function, 
// and not on any global object or variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
                "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add (list, bookName) {
  const newArr = [];
  list.forEach((element) => { //forEach will copy the bookList that is passed in as an argument into newArr
    newArr.push(element);     //this will allow us to keep bookList unmutated, and mutate the newArr and return newArr
  })
  newArr.push(bookName);
  return newArr;
  //can also use the following:
  //return [...list, bookName]; //will make a copy the bookList array with the passed in bookName added to the end
}
function remove (list, bookName) {
  const newArr = [...list]; //this is another way to copy in the bookList array into newArr
  const book_index = newArr.indexOf(bookName); //looking for index of the bookName within the newArr
  if (book_index >= 0) {
    newArr.splice(book_index, 1); //removing the book from the newArr array of books
    return newArr;
    }
  //can also use the following:
  //return list.filter(book => book !== bookName);
}
const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList); //["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
                      //"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]; //UNCHANGED

//using the map method
//The map method iterates over each item in an array and returns a new array 
//containing the results of calling the callback function on each element. It does this without mutating the original array.
const users = [
  { name: 'John', age: 34, sex: "M" },
  { name: 'Amy', age: 20, sex: "F" },
  { name: 'camperCat', age: 10, sex: "M"}
];
const names = users.map((user) => { 
  return {name: user.name, sex: user.sex}
});
console.log(names); //[{ name: 'John', sex: 'M' },{ name: 'Amy', sex: 'F' },{ name: 'camperCat', sex: 'M' }]

//using the filter method
//filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true
//Like map, it does this without needing to modify the original array.
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); //[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

//slice method
//The slice method returns a copy of certain elements of an array. 
// It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice 
//   (and it's non-inclusive). 
// If the arguments are not provided, the default is to start at the beginning of the array through the end, 
//   which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3); //["Dog", "Tiger"]

//concatenation of arrays
[1, 2, 3].concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6]
//It returns a new array and does not mutate either of the original arrays. 
//vs. push, which will mutate the original array

//sort method
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
    //return a===b ? 0 : a < b ? -1 : 1; //this would sort in alphabetical order 
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']); //['z', 's', 'l', 'h', 'b']
//When such a callback function, normally called compareFunction, is supplied, 
//the array elements are sorted according to the return value of the compareFunction: 
//If compareFunction(a,b) returns a value less than 0 for two elements 'a' and 'b', then 'a' will come before 'b'. 
//If compareFunction(a,b) returns a value greater than 0 for two elements 'a' and 'b', then 'b' will come before 'a'. 
//If compareFunction(a,b) returns a value equal to 0 for two elements 'a' and 'b', then 'a' and 'b' will remain unchanged.

//split 
function splitify(str) {
  return str.split(/\W/); //this will separate words by anything that is not a non-word character //acts as [^A-Za-z0-9_]/
}
console.log(splitify("Hello World,I-am code")); //[ 'Hello', 'World', 'I', 'am', 'code']

function urlSlug(title) {
  let newTitle = title.toLowerCase().split(/\W/).filter((substr) => substr != "").join("-"); //the filter method will remove the spaces ""
  return newTitle;
}
urlSlug(" Winter Is  Coming") //winter-is-coming

//The every method works with arrays to check if every element passes a particular test. 
//It returns a Boolean value - true if all values meet the criteria, false if not.
const numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10; //false
});

//The some method works with arrays to check if any element passes a particular test. 
//It returns a Boolean value - true if any of the values meet the criteria, false if not.

//currying and partial application
//The arity of a function is the number of arguments it requires. 
//Currying a function means to convert a function of N arity into N functions of arity 1.
//In other words, it restructures a function so it takes one argument, 
//then returns another function that takes the next argument, and so on.
function unCurried(x, y) {
  return x + y;
}
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) //3
// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference that 
// takes the next argument when it's available. Here's an example using the curried function in the example above:
const funcForY = curried(1);
console.log(funcForY(2)); // 3

//Similarly, partial application can be described as applying a few arguments to a function at a time 
//and returning another function that is applied to more arguments. Here's an example:
function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(this, 1, 2); //x = 1, y = 2, z = undefined 
partialFn(10); //z = 10 --> //13

//asynchronous javascript 
/*
-async javascript allows you to break down larger problems into smaller steps 
-async javascript allows you to do multiple steps at one time -- tasks are completed independently 
-sync javascript requires you to do steps one at a time
-javascript is synchronous by default (single-threaded)
*/

//PROMISES
/*
promise --> pending --> RESOLVE or REJECT
-pending = initial stage
-if resolve, will move to execute .then statements
-if reject, will move to execute .catch statement
-regardless of resolve or reject, will ultimtately execute .finally statement
*/
let is_shop_open = true;
let order = (time, work) => {
  return new Promise ((resolve, reject) => {
    if (is_shop_open){
      setTimeout(() => {
        resolve(work); //work will be done here
      },time) //setting the time it takes for one "work" to be done
    }
    else{
      reject(console.log("Sorry, our shop is closed.")); //error handler //if is_shop_open = false, reject will be executed 
    }
  })
}
order(2000, ()=> console.log("Doing 2 seconds of work now")) //run the code
.then(() => {
  return order(1000, () => console.log("Doing 1 second of work now")) //next step
})
.then(() => {
  return order(5000, () => console.log("Doing 5 seconds of work now")) //next step
})
.then(() => {
  return order(3000, () => console.log("Doing 3 seconds of work now")) //next step
})
.catch(() => {
  console.log("Customer is sad and has left.") //error caught here
})
.finally(() => {
  console.log("The day is over.") //end of promise (is optional)
})

/*
-all you have to do is write the word "async" before any regular function, and it will become a promise
-use try keyword to run our code, while catch keyword is used to catch our errors
-the await keyword makes javascript wait until a promise settles and returns its result
*/

async function order(){
  try {
    console.log("blah");
    console.log("oh blah?");
    await blahblah;
    console.log("ohhhhhhh blah blah");
    console.log("blah blah!");
  }

  catch(error){
    console.log("blahblah does not exist", error)
  }

  finally{
    console.log("runs code regardless of try or catch")
  }
}
order(); //runs the async code
console.log("This is during the break!")

function blahblah(){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve( console.log("oh blah blah blah"));
    }, 3000)
  })
}

// "blah"
// "oh blah?"
// This is during the break!
// **waits 3 seconds**
// "oh blah blah blah"
// "ohhhhhhh blah blah"
// "blah blah!"
// "runs code regardless of try or catch"

//more algorithm scripting

//diff two arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2]; //[1,2,3,5,1,2,3,4,5]
  return newArr.filter((element) => {
    return !arr1.includes(element) || !arr2.includes(element); //if either arr1 or arr2 does NOT include the element, it will be filtered in
  });
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]

//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...args) {
  const newArr = [];
  arr.forEach((element)=> {
    if (args.indexOf(element) === -1){
      newArr.push(element);
    }
  });
  return newArr;
}
//or
function destroyer(arr, ...args) {
  return arr.filter((element)=> {
    return args.indexOf(element) === -1;
  })
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1,1];

//wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
//Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
//then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);
  return collection.filter((obj) =>{
    for (let i = 0; i < sourceKeys.length; i++){
      if(!obj.hasOwnProperty(sourceKeys[i]) || 
      obj[sourceKeys[i]] != source[sourceKeys[i]]){
        return false;
      }
    }
    return true;
  });
}
//or 
function whatIsInAName(collection, source) {
  const arr = [];
  const sourceKeys = Object.keys(source);
  collection.forEach((obj) =>{
    for (let i = 0; i < sourceKeys.length; i++){
      if(!obj.hasOwnProperty(sourceKeys[i]) || 
      obj[sourceKeys[i]] != source[sourceKeys[i]]){
        return;
      }
    }
    arr.push(obj);
  });
  return arr;
}
whatIsInAName(
[{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 

{ last: "Capulet" }); 
//should return [{ first: "Tybalt", last: "Capulet" }]

//spinal tap
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  let regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str);
  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap')); //this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); //this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //the-andy-griffith-show
console.log(spinalCase("AllThe-small Things")); //all-the-small-things

//pig latin
//Pig Latin is a way of altering English Words. The rules are as follows:
//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex); //returns the findings of the regex from the str to myConsonants 
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
translatePigLatin("algorithm"); //algorithmway
translatePigLatin("california") //aliforniacay
translatePigLatin("schwartz") //artzschway

//search and replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it. 
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
function myReplace(str, before, after) {
  //find the index of the "before word"
  let beforeIndex = str.indexOf(before);
  //determine if that first letter of the before word is capitalized or not
  //if it is, will need to capitalize the first letter of the after word
  if (str[beforeIndex] === str[beforeIndex].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else{
    //if it is not, will not need to capitalize the first letter of the after word
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  //replace the before word with the after word 
  str = str.replace(before, after);
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//dna pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  let paired = [];
  // Function to check with strand to pair.
  let search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break; //if these breaks were not present, would iterate through each case 
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };
  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}
//or
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  const arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
pairElement("GCG");

// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let strArr = str.split("");
  let start = strArr[0].charCodeAt(0); //obtains the ascii code of that character at strArr[0];
  let end = strArr[strArr.length-1].charCodeAt(0);
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i] != String.fromCharCode(start)){ //if the character at index i does not equal the expected ascii char at that ascii number
      return String.fromCharCode(start); //returns the ascii character at that ascii number that it is missing
    }
    start++; //increments start so that iteration also moves to the next ascii character 
  }
  return undefined; //if matches all characters and not missing any, will return undefined
}
//or
function fearNotLetter(str) {
  let start = str.charCodeAt(0);
  console.log(str.charCodeAt(0)); //97
  console.log(String.fromCharCode(97)); //a
  let missing = undefined;
  str.split('').forEach((letter)=>{
    if (letter != String.fromCharCode(start)){
      missing = String.fromCharCode(start);
    } else {
      start++;
    }
  });
  return missing;
}
fearNotLetter("abce");
//charCodeAt(index) --> returns an integer representing the UTF-16 code unit at the given index
//String.fromCharCode(num1, num2,...) --> returns a string created from the specific sequence of UTF-16 unit code units passed in
//chatAt(index) --> returns a new string consisting of the single UTF-16 code unit at the string's specific index 

//rest parameter syntax allows a function to accept an indefinite number of arguments as an ARRAY

// sorted union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {
  console.log(arr); //[ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  let oneArr = arr.reduce((prev,curr)=>{
      return prev.concat(curr);
  });
  console.log(oneArr); //[ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
  let outputArr = [];
  oneArr.forEach((element)=> {
    if (!outputArr.includes(element)){
      outputArr.push(element);
    }
  })
  console.log(outputArr); //[ 1, 3, 2, 5, 4 ]
  return outputArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);