function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
Node.prototype.show = function() {
    return this.data;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function(data) {
    var node = new Node(data, null, null);
    if (this.root === null) {
        this.root = node;
    } else {
        var curr = this.root;
        var parent;
        while (true) {
            parent = curr;
            if (data < curr.data) {
                curr = curr.left;
                if (curr == null) {
                    parent.left = node;
                    break;
                }
            } else {
                curr = curr.right;
                if (curr == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

//先序遍历：根左右
BinaryTree.prototype.firstOrder = function(node) {
    if (node === null)
        return;
    console.log(node.show() + " ");
    this.firstOrder(node.left);
    this.firstOrder(node.right);
}

//中序遍历： 左根右
BinaryTree.prototype.middleOrder = function(node) {
    if (node === null)
        return;
    this.middleOrder(node.left);
    console.log(node.show() + " ");
    this.middleOrder(node.right);
}

//后序遍历： 左右根
BinaryTree.prototype.behindOrder = function(node) {
    if (node === null)
        return;
    this.behindOrder(node.left);
    this.behindOrder(node.right);
    console.log(node.show() + " ");
}


var tree = new BinaryTree();
var a = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < a.length; i++) {
    tree.insert(a[i]);
}
tree.firstOrder(tree.root);