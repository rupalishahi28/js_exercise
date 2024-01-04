// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

/** TIME COMPLEXITY
 * will be O(nlogn) since we are using sort function
 */

// 2nd Approach
function mergeArrays(arr1, arr2) {
    var merged = [];
    var i = 0,
        j = 0;

    while((i < arr1.length) && (j < arr2.length)) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }

    if(i <= (arr1.length - 1)) {
        arr1.splice(0, i);
        merged.concat(arr1);
    }else if(j <= (arr2.length - 1)) {
        arr2.splice(0, j);
        merged.concat(arr2);
    }

    return merged;
}

/** TIME COMPLEXITY
 * is o(n+m) where n and m is length of arr1 and arr2 respectively as both arrays are iterated over once.
 */

