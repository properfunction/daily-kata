// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};