const isPalindrome = (str) => {
    /* A regular expression that is used to remove all non-alphanumeric characters from a string. */
    const regex = /[\W_]/g;

    const cleaned = str.toLowerCase().replace(regex, "");
    const len = cleaned.length;

    /* Checking if the first letter is the same as the last letter, then the second letter is the same
    as the second to last letter and so on. */
    for (let i = 0; i < len / 2; i++) {
        if (cleaned[i] !== cleaned[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

const word = "MADA£$'M";

console.log("isPalindrome", isPalindrome(word));
// true
