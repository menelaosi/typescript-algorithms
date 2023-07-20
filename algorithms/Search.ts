/**
 * Performs a binary search recursively 
 * 
 * @param {number[]} array - the sorted array of numbers to binary search
 * @param {number} left - the left index of the binary search
 * @param {number} right - the right index of the binary search
 * @param {number} target - the target value we're looking for
 * @returns the index of the value or -1
 */
function binarySearch(array: number[], left: number, right: number, target: number): number {
    if(right >= left) {
        let midpoint = Math.floor((left + right) / 2);

        if(array[midpoint] === target) { 
            return midpoint;
        }

        if(array[midpoint] > target) {
            return binarySearch(array, left, midpoint - 1, target);
        }
        
        return binarySearch(array, midpoint + 1, right, target);
    }
    return -1;
}