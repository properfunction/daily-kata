// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}