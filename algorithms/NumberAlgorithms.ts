import { INT_MAX, INT_MIN } from "../constants/constants";
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
    if(returnNumber < INT_MIN || returnNumber >= INT_MAX) return 0;

    // Return the number or the negative version if it was negative
    return isNegative ? -returnNumber : returnNumber;
};

/**
 * Determines if a number is a palindrome
 * @param {number} x - check if it's a palindrome
 * @returns true if a palindrome, false if not
 */
function isPalindrome(x: number): boolean {
    // Negative numbers aren't palindromes as is every number ending with 0 other than 0
    if(x < 0 || x % 10 === 0 && x != 0) return false

    // Single digit numbers are palindromic by definition so just return true here
    if(x <= 10 && x >= 0) return true;
    
    // Set a reverse number at 0 and keep reducing the number and increasing reverse
    let reverseNumber = 0;
    while(reverseNumber < x) {
        // Reverse number is the remainder + (10 * reverse number)
        reverseNumber = (x % 10) + (10 * reverseNumber);

        // Reduce x by a factor of 10
        x = Math.floor(x / 10);
    }

    // If the numbers match or would match if reduced by a factor of 10 confirm
    return (x === reverseNumber || x === Math.floor(reverseNumber / 10));
};

