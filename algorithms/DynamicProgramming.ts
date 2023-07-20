/**
 * Gets the longest common subsequence of two strings
 * 
 * @param {string} s1 - The first string to compare
 * @param {string} s1 - The second string to compare
 * @param {number} m - The number for the first character 
 * @param {number} n - The number for the second character
 * @returns the longest common subsequence length
 */
function longestCommonSubsequence(s1: string, s2: string, m: number, n: number): number {
    if(m === 0 || n === 0) return 0;
    if(s1.charAt(m - 1) === s2.charAt(n - 1)) {
        return 1 + longestCommonSubsequence(s1, s2, m - 1, n - 1);
    } else {
        return maxNumber(longestCommonSubsequence(s1, s2, m, n - 1), longestCommonSubsequence(s1, s2, m-1, n));
    }
}

/**
 * 
 * Find the max of two numbers
 * 
 * @param {number} a - first number to compare 
 * @param {number} b - second number to compare 
 * @returns the greater number
 */
function maxNumber(a: number, b: number): number { 
    return (a > b) ? a : b;
}
