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