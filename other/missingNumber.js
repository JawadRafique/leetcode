/**
 * @param {number[]} nums
 * @return {number}
 */

/* Steps
/* The sum of the first n natural numbers. */
/* Adding all the numbers in the array. */
/* The subtraction operator.
 */
const newWay = (nums) =>
    (nums.length * (nums.length + 1)) / 2 -
    nums.reduce((sum, n) => (sum += n), 0);

var missingNumber = function (nums) {
    const len = nums.length;
    for (let i = 0; i < len + 1; i++) {
        if (!nums.includes(i)) return i;
    }
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log("missingNumber", missingNumber(nums));
console.log("missingNumber newWay", newWay(nums));

/**
 * Example:
 * Input: nums = [3, 0, 1];
 * Output: 2;
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 * 2 is the missing number in the range since it does not appear in nums.
 */
