//square every digit
//you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }
console.log(squareDigits(5678)); //25364964 (int)
console.log(5678) //int
console.log("5678"); // string
console.log("" + 5678); //int into string
console.log([5 ,6 ,7 ,8]); //array of nums

