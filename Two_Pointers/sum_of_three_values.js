const sumOfThreeValues = (nums, target) => {
    nums.sort((a, b) => {
        return a - b;
    });
    for(let i = 0; i < nums.length - 2; i++) {
        let low = i + 1;
        let high = nums.length - 1;
        while(low < high) {
            let triple = nums[i] + nums[low] + nums[high];
            if(triple === target) {
                return true;
            }else if(triple < target) {
                low++;
            }else{
                high--;
            }
        }
    }
    return false;
}

/** TIME COMPLEXITY
 * In the solution above, sorting the array takes O(nlog(n)) and the nested loop takes O(n2) to find triplet.
 * Here n is the number of elements in the input array. Therefore, the total time complexity of the solution is
 * O(nlog(n) + n2) which simplifies to O(n2)
 */

/** SPACE COMPEXITY
 * The space complexity of the solution, primarily, depends on the sorting algorithm we use. We use built in  JS func, sort(),
 * which does the in-place sorting. Therefore, the space complexity provided solution is O(1)
 */