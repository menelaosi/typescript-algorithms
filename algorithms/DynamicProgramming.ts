/**
 * Gets the longest common subsequence of two strings without memoization
 * 
 * @param {string} s1 - The first string to compare
 * @param {string} s1 - The second string to compare
 * @param {number} m - The number for the first character 
 * @param {number} n - The number for the second character
 * @returns the longest common subsequence length
 */
function longestCommonSubsequence(
        s1: string, 
        s2: string, 
        m: number,
        n: number,
    ): number {
        if(m === 0 || n === 0) return 0;
        if(s1.charAt(m - 1) === s2.charAt(n - 1)) {
            return 1 + longestCommonSubsequence(s1, s2, m - 1, n - 1);
        } else {
            return maxNumber(longestCommonSubsequence(s1, s2, m, n - 1), longestCommonSubsequence(s1, s2, m-1, n));
        }
}

/**
 * Compares the two strings using dynamic programming
 * 
 * @param {string} s1 - the first string being compared
 * @param {string} s2 - the second string being compared
 * @param {number} m - the counter of the first string
 * @param {number} n - the counter of the second string
 * @param {number[][]} memoArray - the memoized two-dimensional array for dynamic programming
 * @returns 
 */
function longestCommonSubsequenceWithMemoization(s1: string, s2: string, m: number, n: number, memoArray: number[][]): number {
    if(m === 0 || n === 0) return 0;
    
    if(memoArray[m][n] !== -1) {
        return memoArray[m][n];
    }

    if (s1.charAt(m - 1) === s2.charAt(n - 1)) {
        memoArray[m][n] = 1 + longestCommonSubsequenceWithMemoization(s1, s2, m - 1, n - 1, memoArray);
    } else {
        memoArray[m][n] = maxNumber(longestCommonSubsequenceWithMemoization(s1, s2, m, n - 1, memoArray), longestCommonSubsequenceWithMemoization(s1, s2, m - 1, n, memoArray));
    }

    return memoArray[m][n];
}

/**
 * Finds the longest common subsequence in two strings
 * 
 * @param {string} s1 - the first string to compare
 * @param {string} s2 - the second string to compare
 * @returns the longest common subsequence
 */
function longestCommonSubsequenceWrapper(s1: string, s2: string) {
    const m = s1.length;
    const n = s2.length;

    // Use memoization instead
    // return longestCommonSubsequence(s1, s2, m, n);
    const memoArray: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1));

    return longestCommonSubsequenceWithMemoization(s1, s2, m, n, memoArray);
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
