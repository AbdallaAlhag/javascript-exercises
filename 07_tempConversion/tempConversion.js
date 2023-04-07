const convertToCelsius = function(foo) {
  return foo = Math.round( ((foo - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(bar) {
  return bar = Math.round( (bar * (9/5) + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
