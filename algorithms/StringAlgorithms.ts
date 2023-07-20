/**
 * Calculates the length of the longest substring without repeating characters
 * 
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
 * 
 * @param {string} s - string to check if it's a letter
 * @returns false if more or less than one character or if that character is not a letter, otherwise true
 */
function isLetter(s: string): boolean {
    if(s.length !== 1) return false
    return (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z');
}

/**
 * 
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