/**
 * Checks an array of numbers to see if any add up to the target
 * 
 * @param {number[]} nums - an array of numbers to check
 * @param {number} target - the target number they'd reach
 * @returns {number[]} the pair of numbers that add to the target or an empty array
 */
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [i, map.get(complement)!];
        }
        map.set(nums[i], i);
    }
    return [];
};

/**
 * Find the median number of two sorted arrays
 * 
 * @param {number[]} nums1 - first number array
 * @param {number[]} nums2 - second number array
 * @returns the median of the two arrays
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let m = 0;
    let n = 0;
    let mergedNums: number[] = [];

    // Go through each array and add 
    while (m < nums1.length && n < nums2.length) {
        // If first number is smaller than second number push it to the merged number array or vice versa 
        if(nums1[m] <= nums2[n]) {
            mergedNums.push(nums1[m]);
            m++;
        } else {
            mergedNums.push(nums2[n]);
            n++;
        }
    }

    // If there are still nums1, add them at the end
    while(m < nums1.length) {
        mergedNums.push(nums1[m]);
        m++;
    }
    
    // If there are still nums2, add them at the end
    while(n < nums2.length) {
        mergedNums.push(nums2[n]);
        n++;
    }
    const mergedNumsLength = mergedNums.length;
    const midpoint = Math.floor(mergedNumsLength / 2);

    // Return the middle item or the average of the middle items if it's an even number of items
    return mergedNumsLength % 2 === 1 ? mergedNums[midpoint] : (mergedNums[midpoint - 1] + mergedNums[midpoint]) / 2;
};