// You will be given an array of numbers which can be used using the String.fromCharCode() method to convert the number to a 
// character. It's recommended to map over the array of numbers and convert each number to the corresponding ascii character.

var ArrowFunc = function(arr) {
  return arr.map(code => String.fromCharCode(code)).join(''); 
}