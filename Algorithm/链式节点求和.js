/* 给定两个代表非负数的链表，数字在链表中是反向存储的（链表头结点处的数字是个位数，第二个结点上的数字是十位数...），求这个两个数的和，结果也用链表表示。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出： 7 -> 0 -> 8
 */

function ListNode(x) {
    this.val = x;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    let node;
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    let next1 = l1 && l1.next ? l1.next : null;
    let next2 = l2 && l2.next ? l2.next : null;
    let flag = arguments[2] ? parseInt(arguments[2]) : 0;
    if (next1 || next2) {
        let sum = v1 + v2 + (flag);
        node = new ListNode(sum % 10);
        node.next = addTwoNumbers(next1, next2, (sum) >= 10 ? 1 : 0);
    } else {
        let sum = v1 + v2 + flag;
        node = new ListNode(sum % 10);
        if (sum >= 10) {
            node.next = new ListNode(1);
        }
    }
    return node;
}