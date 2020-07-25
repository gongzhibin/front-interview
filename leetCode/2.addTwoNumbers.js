/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const first = new ListNode(0);
    let temp = first;

    while(l1 || l2) {
        const add = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (temp && temp.val || 0);
        let next = null;
        if (add >= 10) {
            temp.val = add - 10;
            next = new ListNode(1);
        } else {
            temp.val = add;
            if((l1 && l1.next) || (l2 && l2.next)) {
                next = new ListNode(0);
            }
        }
        temp.next = next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        temp = temp.next;
    }

    return first;
};