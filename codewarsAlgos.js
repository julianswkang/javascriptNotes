//square every digit
//you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 8^1 and 12 is 1.
//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }
console.log(squareDigits(5678)); //25364964 (int)
console.log(5678) //int
console.log("5678"); // string
console.log("" + 5678); //int into string
console.log([5 ,6 ,7 ,8]); //array of nums

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
  let times = 0;
  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  return times;
}