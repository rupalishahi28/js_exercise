export function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// The time complexity is O(n), where n is the number of characters in the string. However, our algorithm will only run 
// (n/2) times, since two pointers are traversing toward each other.

// The space complexity is O(1), since we use constant space to store two indexes.