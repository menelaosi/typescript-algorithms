/**
 * Reverses a number
 * @param {number} x - The number to reverse
 * @returns the number reversed or 0 if the number is out of the bounds of an integer
 */
function reverse(x: number): number {
    // Check if the number is negative for later
    const isNegative = x < 0;

    // Just reverse the numbers here
    const numberString = Math.abs(x).toString();

    // Split the string into an array of strings, reverse the array, and then join
    const reversedString = numberString.split('').reverse().join('');

    // Turn the string into a number
    const returnNumber = Number(reversedString);

    // If the bigger or smaller than a 32 bit signed integer then return 0
    if(returnNumber < Math.pow(-2, 31) || returnNumber >= Math.pow(2, 31)) return 0;

    // Return the number or the negative version if it was negative
    return isNegative ? -returnNumber : returnNumber;
};

