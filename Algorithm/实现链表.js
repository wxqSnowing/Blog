class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class ListLink {
    constructor(node) {
        this.head = node;
        this.length = 1;
    }

    isEmpty() {
        return this.length > 0 ? true : false;
    }

    curNode() {
        let headNode = this.head;
        let curNode = headNode;
        while (headNode) {
            curNode = headNode;
            headNode = headNode.next;
        }
        return curNode
    }

    append(node) {
        let lastNode = this.curNode();
        lastNode.next = node;
        this.length++;
    }

    toString() {
        let a = [];
        let node = this.head;
        for (let i = this.length - 1; i >= 0; i--) {
            a.push(node.val);
            node = node.next;
        }
        return a;
    }
}

function addTwoNumbers(l1, l2) {
    let l3;
    let a1 = l1.toString();
    let a2 = l2.toString();
    let flag;
    let length = Math.min(a1.length, a2.length);
    for (let i = 0; i < length; i++) {
        if (i === 0) {
            flag = Math.floor((a1[i] + a2[i]) / 10);
            let value = (a1[i] + a2[i]) % 10;
            l3 = new ListLink(new ListNode(value));
            if (flag > 0) {
                l3.append(new ListNode(flag))
            }
        } else {
            let value = (a1[i] + a2[i] + (flag > 0 ? 1 : 0)) % 10;
            l3.append(new ListNode(value));
            flag = Math.floor((a1[i] + a2[i] + (flag > 0 ? 1 : 0)) / 10);
        }
    }

    while (length < a1.length) {
        let sum = a1[length] + (flag > 0 ? 1 : 0);
        let value = sum % 10;

        l3.append(new ListNode(value));
        if (Math.floor(sum / 10) > 0) {
            l3.append(new ListNode(1));
        }
        length++;
    }
    while (length < a2.length) {
        let sum = a2[length] + (flag > 0 ? 1 : 0);
        let value = sum % 10;
        l3.append(new ListNode(value));
        if (Math.floor(sum / 10) > 0) {
            l3.append(new ListNode(1));
        }
        length++;
    }

    return l3;
}

let a1 = [2, 4, 9];
let a2 = [5, 6];
let l1;
for (let i = 0; i < a1.length; i++) {
    if (i === 0) {
        l1 = new ListLink(new ListNode(a1[i]));
    } else {
        l1.append(new ListNode(a1[i]));
    }
}

let l2;
for (let i = 0; i < a2.length; i++) {
    if (i === 0) {
        l2 = new ListLink(new ListNode(a2[i]));
    } else {
        l2.append(new ListNode(a2[i]));
    }
}
let res = addTwoNumbers(l1, l2);
console.log(res.toString());