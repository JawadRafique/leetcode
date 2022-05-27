/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    if (num === 0) return 0;

    let steps = 1;
    /**
     * If the number is even, divide it by 2, otherwise subtract 1 from it. If the number is greater
     * than 0, increment the steps counter and call the function again.
     */
    const taskPerform = () => {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }

        if (num > 0) {
            steps++;
            /* A recursive function. */
            taskPerform();
        }
    };

    taskPerform();
    return steps;
};

console.log("numberOfSteps", numberOfSteps(123));
