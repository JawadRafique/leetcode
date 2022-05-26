/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    return n
        .toString(2) // to convert to binary
        .split("")
        .filter((item) => item === "1")
        .map(Number)
        .reduce((partialSum, a) => partialSum + a, 0);
};

const num = 00000000000000000000000000001011; // this will be 521 in function

console.log("hammingWeight", hammingWeight(num));
// 3
