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
  

