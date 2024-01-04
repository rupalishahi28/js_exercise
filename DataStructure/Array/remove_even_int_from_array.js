// function removeEven(arr) {
//     let odd = [];
//     for(let number of arr) {
//         if(number % 2 !== 0) {
//             odd.push(number)
//         }
//     }
//     return odd;
// }

// Above solution have Time complexity of O(n) as needs to iterate over whole array to check for even.
// We can acheive the same by using filter

function removeEven(arr) {
    return arr.filter((v => v % 2 !== 0))
}

// filters out element which return false and Time complexity remains same
