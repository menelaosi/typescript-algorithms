/**
 * Calculates the length of the longest substring without repeating characters
 * @param {string} s the string to find the longest substring for
 * @returns the maximum length
 */
function lengthOfLongestSubstring(s: string): number {

    //Set max length, start, and end to 0
    let maxLength = 0;
    let start = 0;
    let end = 0;
    
    // Use a set to figure ou the substring
    const set = new Set<string>();

    //While the endpoint is not the end
    while (end < s.length) {
        const currentChar = s.charAt(end);
        
        //If the current character is not in the set, add it and update the currentLength
        if(!set.has(currentChar)) {
            set.add(currentChar);
            const currentLength = end - start + 1;

            //Check the current length is bigger than the max length
            if(currentLength > maxLength) {
                maxLength = currentLength;
            }
            
            //Increment end
            end++;
        } else {
            //Remove the character and increment the start
            set.delete(s.charAt(start));
            start++;
        }
    }
    return maxLength;
};

/**
 * Helper function to check if a character is a letter
 * @param {string} s - string to check if it's a letter
 * @returns false if more or less than one character or if that character is not a letter, otherwise true
 */
function isLetter(s: string): boolean {
    if(s.length !== 1) return false
    return (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z');
}

/**
 * @param {string} s - the string to swap characters for 
 * @param {number} leftIndex - the index of the left character
 * @param {number} rightIndex - the index of the right character
 * @returns the string with the characters at those indices swapped
 */
function swapCharacters(s: string, leftIndex: number, rightIndex: number): string {
    let returnString = "";
    for(let i = 0; i < s.length; i++) {
        if(i === leftIndex) {
            returnString += s.charAt(rightIndex);
        } else if(i === rightIndex) {
            returnString += s.charAt(leftIndex);
        } else {
            returnString += s.charAt(i);
        }
    }
    return returnString;
};

/**
 * Reverses a string but ignores special characters (characters that aren't letters)
 * 
 * @param {string} s - the string to reverse ignoring special characters 
 * @returns the string with the letters reversed
 */
function reverseStringIgnoringSpecialCharacters(s: string): string {
    let rCounter = s.length - 1;
    let lCounter = 0;
    while(lCounter < rCounter) {
        if(!isLetter(s.charAt(lCounter))) {
            lCounter++;
        } else if (!isLetter(s.charAt(rCounter))) {
            rCounter--;
        } else {
            s = swapCharacters(s, lCounter, rCounter);
            lCounter++;
            rCounter--;
        }
    }
    return s;
};

/**
 * Gets the longest palindrome for a string using Manacher's algorithm
 * @param {string} s - Input string to find the palindrome for
 * @returns the longest possible palindrome or an empty string if there's none
 */
function longestPalindrome(s: string): string {
    // Handle null or empty string or single character
    if(!s || s.length === 0) return "";
    if(s.length === 1) return s;
    
    // Track the maximum length as well as the beginning of the substring
    let maxLength = 0;
    let start = 0;

    // Iterate through the string
    for(let i = 0; i < s.length - 1; i++) {
        // Use expand around the center to determine if it's an even or odd palindrome so far and what's longer
        const oddLength = expandAroundCenter(s, i, i);
        const evenLength = expandAroundCenter(s, i, i + 1);
        const length = Math.max(oddLength, evenLength);

        //If it's longer than the maxLength, change the maxLength and the start iterator
        if(length > maxLength) {
            maxLength = length;
            start = i - Math.floor((length - 1) / 2);
        }

        // If the string is too short to have a longer palindrome, break to return
        if(i + Math.floor(maxLength / 2) >= s.length) break;
    }

    // Returns the longest palindomic substring
    return s.substring(start, start + maxLength);
};

/**
 * Helper function for the palindrome to expand around the center
 * @param {string} s - input string from the above problem
 * @param {number} left - The value for the start of the substring
 * @param {number} right - The value for the end of the substring
 * @returns the value of the endpoint - the start point - 1
 */
function expandAroundCenter(s: string, left: number, right: number): number {
    // Check that we're not out of bends and the characters are equivalent, then decrement left and right
    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
};

/**
 * Zigzag conversion
 * @param {string} s - the string for the zigzag conversion
 * @param {number} numRows - The number of rows to write out as zigzag
 */
function convert(s: string, numRows: number): string {
    // Handle null or empty string or no rows
    if(!s || s.length === 0 || numRows <= 0) return "";

    // Handle the case with one row
    if(numRows === 1) return s;

    // Set a directional value to determine where in the zigzag we are and a row for which row we're in
    let row = 0;
    let direction = -1;

    // Create an array of strings for each row
    const zigzag: string[] = new Array(numRows).fill("");
    
    // Iterate through the provided string building the string array at each row and changing direction at the end
    for(let i = 0; i < s.length; i++) {
        zigzag[row] += s.charAt(i);

        if(row === 0 || row === numRows - 1) direction = -direction;

        row += direction;
    }
    return zigzag.join("");
};
import { INT_MAX, INT_MIN } from "../constants/constants";
/**
 * Turns a string into a number 
 * @param {string} s - The string to turn into a number 
 * @returns 0 if there's an error, INT_MIN if it's <= INT_MIN, INT_MAX if it's >= INT_MAX, or the number without whitespace
 */
function myAtoi(s: string): number {

    // Return 0 if there's no string
    if(!s || s.length === 0) return 0;
    
    // Regular expression for zero or more spaces, one or zero + or -, and many numbers
    const numberRegEx = /^ *[+-]?[0123456789]*/;
    
    // Match the number to this regular expression
    const returnNumber = Number(s.match(numberRegEx));

    // Return 0 if this doesn't match, INT_MIN if less, or INT_MAX if more
    if(!returnNumber) return 0;
    if(returnNumber <= INT_MIN) return INT_MIN;
    if(returnNumber >= INT_MAX) return INT_MAX;
    return returnNumber;
};