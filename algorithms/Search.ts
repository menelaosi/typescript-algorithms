/**
 * Performs a binary search recursively 
 * @param {number[]} array - the sorted array of numbers to binary search
 * @param {number} left - the left index of the binary search
 * @param {number} right - the right index of the binary search
 * @param {number} target - the target value we're looking for
 * @returns the index of the value or -1
 */
function binarySearch(array: number[], left: number, right: number, target: number): number {
    if(right >= left) {
        const midpoint = Math.floor((left + right) / 2);

        if(array[midpoint] === target) return midpoint;

        if(array[midpoint] > target) return binarySearch(array, left, midpoint - 1, target);
        
        return binarySearch(array, midpoint + 1, right, target);
    }
    return -1;
};

/**
 * Does a binary search on a tilted array
 * @param {number[]} array - The array of numbers to search
 * @param {number} left - The left value in the array
 * @param {number} right - The right value in the array
 * @param {number} target - The number being searched for
 * @returns the index of the number if found our -1
 */
function binarySearchTilted(array: number[], left: number, right: number, target: number): number {
    if(left > right) return -1;
    const midpoint = Math.floor((left + right) / 2);

    if(array[midpoint] === target) return midpoint;

    if(array[left] <= array[midpoint]) {
        if(target >= array[left] && target <= array[midpoint]) {
            return binarySearchTilted(array, left, midpoint - 1, target);
        }

        return binarySearchTilted(array, midpoint + 1, right, target);
    }

    if(target >= array[midpoint] && target <= array[right]) {
        return binarySearchTilted(array, midpoint + 1, right, target);
    }

    return binarySearchTilted(array, left, midpoint - 1, target);
};