// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

// get the sum of two arrays...actually the sum of all their elements

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}

