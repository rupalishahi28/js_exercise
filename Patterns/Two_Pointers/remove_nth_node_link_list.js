const removeNthLastNode = (head, n) => {
    let right = head;
    let left = head;

    // move right pointer n element away from the left pointer
    for(let i = 0; i < n; i++) {
        right = right.next;
    }

    // Removal of head node
    if(!right) {
        return head.next;
    }

    // move both pointers until right pointer reaches the last node
    while(right.next !== null) {
        right = right.next;
        left = left.next;
    }

    // At this point left pointer points to (n-1)th element
    // So link it to next to next element of left
    left.next = left.next.next;

    return head;
}

/** TIME COMPLEXITY
 * The time complexity is O(n), where n is the number of nodes in linked list
 */

/** SPACE COMPLEXITY
 * The space complexity is O(1), because we use constant space to store two pointers.
 */