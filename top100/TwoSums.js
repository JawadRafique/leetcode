/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3, 2, 3],
    target = 6;
var twoSum = function (nums, target) {
    let breakLoop = false;
    let temp = [];
    const numLength = nums.length;
    for (let i = 0; i < numLength - 1; i++) {
        for (let j = i + 1; j < numLength; j++) {
            const total = nums[i] + nums[j];
            if (total === target) {
                temp = [i, j];
                breakLoop = true;
                break;
            }
            if (breakLoop) break;
        }
    }
    return temp;
};
console.log("twoSum", twoSum(nums, target));
// twoSum(nums, target);

/**
 * Example
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
