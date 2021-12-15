function dog(){
    this.pupper = 'pupper';
}

dog.prototype.pupperino = 'woooooooooof';

const buddy = Object.create(dog);

// console.log(buddy.pupper); //undefined
// console.log(buddy.pupperino); //undefined
// console.log(dog.isPrototypeOf(buddy)); //true
// console.log(buddy.prototype); //{ pupperino: 'woooooooooof' }
// console.log(dog.prototype); //{ pupperino: 'woooooooooof' }

//in the case of using the Object.create function, this is the constructor function
//it creates and empty object, but the dog function will be passed in as the object's (buddy) prototype
    //OR will the dog function be linked via __proto__ to form the prototype chain ???
//in the case of buddy, the dog function is "placed in as" buddy's prototype
//you will notice that when you try to find buddy.pupper, it returns as undefined
//this is because the dog function in buddy's prototype is NOT executed when the object is created 
    //OR the dog function's code is NOT executed, it is simply linked via __proto__ to give buddy access to its properties
//this is in contrast to utilizing the 'new' keyword, where the constructor function's code is executed and will be returned
    //into the object that it is creating
//you will notice that buddy has inherited dog's prototype, which consists of a property pupperino
    // = prototype chain 
//this gives buddy access to the dog function's prototype 


const maddie = new dog();

// console.log(maddie.pupper); //pupper
// console.log(maddie.pupperino); //woooooooooof
// console.log(dog.isPrototypeOf(maddie)); //true
// console.log((dog.prototype).isPrototypeOf(maddie)); //true
// console.log(maddie.prototype); //undefined
// console.log(dog.prototype); //{ pupperino: 'woooooooooof' }

//in the case of using the 'new' keyword, this creates an object called maddie with the dog constructor function
//the constructor function WILL run the code within that function --> dog will run this.pupper --> sets maddie's property 
    //to pupper with the value of 'pupper'
//then newly created object maddie will have a __proto__link to the object's prototype that has created it, in this case the dog constructor function
//dog.prototype.pupperino = 'woooof' then initializes a property and value into the prototype of dog
//so when we try to access that property pupperino, javascript sees that it is not in the object, 
    //then looks into the prototype of the constructor function that is linked to the newly created object maddie
    //sees it in the prototype, and returns that value
//will notice here that maddie's prototype is undefined when utilizing maddie.prototype
//maddie doesnt HAVE the prototype, but the dog function does since it was declared utilizing dog.prototype.pupperino = 'woooooooooof';
//with the __proto__ link to dog function's prototype, javascript will know that, since maddie doesnt have the pupperino property,
//it will look to the __proto__ link from the constructor function that created maddie, to see if there is a pupperino property 
    //in dog's prototype
//so will utilize the __proto__ link to the dog function's 'prototype, and parse through that prototype to look
//for the pupperino property 

dog.prototype.bark = "bark";
// console.log(dog.prototype); //{ pupperino: 'woooooooooof', bark: 'bark' }
// console.log(dog.prototype.bark); //bark


//overall, if you want to create an empty object that has a prototype, utilize the object.create() method
//you will need to pass in a parameter in create() to create a __proto__ link to that object
//this will allow you to inherit that object into the newly created object's prototypal chain 

//if you want to create a new object, that has set properties for each object, utilize the new keyword
    //ex. const obj = new Object (...parameters)
//this obj will have a __proto__ link with the constructor function's prototype, Object, 
//this will give access to Object's prototypal chain

//to note, the __proto__ (dunder proto) link provides you the ability to link to another object's prototype 
//every object in javascript has this property
//it points back to the prototype object of the constructor function that created that object


// // Only change code below this line
// class Thermostat{
//     constructor (fahrenheit){
//       this.fahrenheit = fahrenheit;
//     }
//     get temperature(){
//       return ((5/9) * (this.fahrenheit - 32));
//     }
//     set temperature(celsius){
//       this.fahrenheit = ((celsius * 9.0 )/ 5 + 32);
//     }
//   }
//   // Only change code above this line
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   console.log(thermos);
//   //{ fahrenheit: 76 } --> initializing an object with fahrenheit as property, and 76 as value via constructor method
  
//   let temp = thermos.temperature; // 24.44 in Celsius
//   console.log(temp);
//   //24.444444444444446 --> utilizing getter to obtain thermos' fahrenheit temperature as celsius, and storing that celsius value in temp 
  
//   thermos.temperature = 26;
//   console.log(thermos)
//   //{ fahrenheit: 78.8 } --> utilizing setter, taking 26 as the celsius temp and converting that to fahrenheit, and setting fahrenheit to 78.8 = 26deg in celsius
  
//   temp = thermos.temperature; // 26 in Celsius
//   console.log(temp)
//   //26 --> using getter to figure out what thermos new fahrenheit temp is in celsius 
  




//this is a test where is it on git hub?
//more examples below from CS prep challenges


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

// /*** CHALLENGE 1 ***/

// function makePerson(name, age) {
// 	const obj = Object.create(null);
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }

// const vicky = makePerson('Vicky', 24);


// // /********* Uncomment these lines to test your work! *********/
// // console.log(vicky.name); // -> Logs 'Vicky'
// // console.log(vicky.age); // -> Logs 24





// /****************************************************************
//                        USING OBJECT.CREATE
// ****************************************************************/

// /*** CHALLENGE 2 ***/

// const personStore = {
// 	greet: function(){console.log("hello");}
// };

// // /********* Uncomment this line to test your work! *********/
// //personStore.greet(); // -> Logs 'hello'



// /*** CHALLENGE 3 ***/

// function personFromPersonStore(name, age) {
// 	const obj = Object.create(personStore);
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }

// const sandra = personFromPersonStore('Sandra', 26);
// // /********* Uncomment these lines to test your work! *********/
// // console.log(sandra.name); // -> Logs 'Sandra'
// // console.log(sandra.age); //-> Logs 26
// // sandra.greet(); //-> Logs 'hello'

// /*** CHALLENGE 4 ***/

// personStore.introduce = function(){
//   console.log(`Hi, my name is ${this.name}`);
// }
// //don't use personStore.prototype.introduce because personStore IS the prototype, so just add method in like normal

// // sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





// /****************************************************************
//                     USING THE 'NEW' KEYWORD
// ****************************************************************/

// /*** CHALLENGE 5 ***/
// function PersonConstructor() {
// 	this.greet = function(){console.log("hello");}
// }
// // /********* Uncomment this line to test your work! *********/
// const simon = new PersonConstructor();
// //simon.greet(); // -> Logs 'hello'


// /*** CHALLENGE 6 ***/
// function personFromConstructor(name, age) {
// 	const obj = new PersonConstructor();
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }
// //PersonConstructor.introduce = function() {console.log("hi")}; 
//  //this will create an introduce method into PersonContructor's object
//  //because it is in the object and not the function definition, the constructor function will not run the new line of code 
//  // and incorporate that introduce method into the newly created object
//      //reminder: every function is also an object that can have a prototype 
// 	//so, if you wanted to add a method or property, you can add it to the constructor functions prototype
// 	//this works because the 'new' keyword automatically generates a __proto__ link to the constructor functions prototype
//  //therefore it will have access to that new introduce method via that __proto__ link
// //PersonConstructor.prototype.introduce = function() {console.log("hi")};
// 	//therefore, this is the way to implement another method to the mike object

// const mike = personFromConstructor('Mike', 30);

// // /********* Uncomment these lines to test your work! *********/
// // console.log(mike.name); // -> Logs 'Mike'
// // console.log(mike.age); //-> Logs 30
// // mike.greet(); //-> Logs 'hello'

// //mike.introduce(); //this function can execute because it exists in the prototype of the constructor function, PersonConstructor 

// /*** CHALLENGE 7 ***/
// PersonConstructor.prototype.introduce = function(){console.log(`Hi, my name is ${this.name}`)};
// //use .prototype this time around because PersonConstructor is the object constructor, then you want to add the introduce method into the PersonConstructor's prototype 

// //mike.introduce(); // -> Logs 'Hi, my name is Mike'


// /****************************************************************
//                         USING ES6 CLASSES
// ****************************************************************/

// /*** CHALLENGE 8 ***/

// class PersonClass {
// 	constructor(name) {
//     this.name = name;
// 	}
	
//   greet(){
//     console.log("hello");
//   }

// }


// // /********* Uncomment this line to test your work! *********/
// const george = new PersonClass;
// //george.greet(); // -> Logs 'hello'



// /*** CHALLENGE 9 ***/

// class DeveloperClass extends PersonClass {
  
//   introduce(){
//     console.log(`Hello World, my name is ${this.name}`)
//   }
// }

// //since we are extending to the PersonClass, we have access to the constructor function of PersonClass, so we do not need to define another constructor function for DeveloperClass

// // /********* Uncomment these lines to test your work! *********/
// // const thai = new DeveloperClass('Thai', 32);
// // console.log(thai.name); // -> Logs 'Thai'
// // thai.introduce(); //-> Logs 'Hello World, my name is Thai'



// /****************************************************************
//                       EXTENSION: SUBCLASSING
// ****************************************************************/

// const userFunctionStore = {
//   sayType: function() {
//     console.log("I am a " + this.type);
//   }
// }

// function userFactory(name, score) {
//   let user = Object.create(userFunctionStore);
//   user.type = "User";
//   user.name = name;
//   user.score = score;
//   return user;
// }

// /*** CHALLENGE 10 ***/

// const adminFunctionStore = Object.create(userFunctionStore);

// /*** CHALLENGE 11, 12, 13 ***/


// function adminFactory(name, score) {
//   const obj = Object.create(adminFunctionStore); //adminFunctionStore becomes the object obj's prototype
//   obj.name = name;
//   obj.score = score;
//   //obj.sharePublicMessage = function() {console.log("yoyoyo")};
//   return obj;
// }

// adminFunctionStore.type = "Admin"; //directly adds a property to the newly created object's prototype
// //this works because not using the 'new' keyword to create the object
// //so adding property directly into the prototype

// /*** CHALLENGE 14 ***/
// /* Put code here for a method called sharePublicMessage*/
// //adminFactory.prototype.sharePublicMessage = function(){console.log("Welcome, users!");}
// const adminFromFactory = adminFactory("Eva", 5);
// adminFunctionStore.sharePublicMessage = function(){console.log("Welcome, users!")};

// // /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
// console.log(adminFromFactory.name);

// const userFromFactory = userFactory("John", 4);
// userFromFactory.sayType()
// console.log(userFromFactory.name);


// /****************************************************************
// EXTENSION: MIXINS
// ****************************************************************/

// class Dog {
//   constructor() {
//     this.legs = 4;
//   }
//   speak() {
//     console.log('Woof!');
//   }
// }

// const robotMixin = {
//   skin: 'metal',
//   speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
// }

// let robotFido = new Dog();

// robotFido = Object.assign(robotFido, robotMixin);

//  /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

