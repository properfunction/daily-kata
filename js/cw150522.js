// Return an array, where the 1st element is the count of positive numbers and 2nd element is sum of negative numbers. 
// 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.

function countPositiveSumNegative(input){
    if(input === null || input === 0){
        return [];
    } else {
        let pos = 0;
        let neg = 0;

        input.map(e => e > 0 ? pos++ : neg += e)

        return [pos, neg]
    }
}
