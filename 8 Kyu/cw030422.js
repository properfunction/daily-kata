// Sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}