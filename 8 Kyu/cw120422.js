// Return the average of the given array rounded down to its nearest integer.

function getAverage (marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}



