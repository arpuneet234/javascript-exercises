const convertToCelsius = function(temp) {
  temp_celsius=Math.round((temp-32)*(5/9)*10)/10;
  return temp_celsius;
  
};

const convertToFahrenheit = function(temp) {
  temp_fahrenheit=Math.round((temp*(9/5)+32)*10)/10;
  return temp_fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
