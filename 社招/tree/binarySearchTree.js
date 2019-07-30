class Node {
    constructor(value, leftChild, rightChild) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // 基于数组构建二叉查找树
    arrToTree(arr) {
        arr.forEach((item) => {
           this.insert(item); 
        });
    }

    // 1. 树的节点插入
    insert(value) {
        const node = new Node(value, null, null);
    
        if (this.root === null) {
            this.root = node;
            return;
        }
    
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (value < current.value) {
                current = current.leftChild;
                if (current === null) {
                    parent.leftChild = node;
                    break;
                }
            } else {
                current = current.rightChild;
                if (current === null) {
                    parent.rightChild = node;
                    break;
                }
            }
        }
    }

    // 3. 删除节点
    removeNode(value, root = this.root) {
        __remove(root, value);
        function __remove(node, value) {
            if (node === null) {
                return null;
            }
            if (value < node.value) {
                node.leftChild = __remove(node.leftChild, value);
                return node;
            } else if (value > node.value) {
                node.rightChild = __remove(node.rightChild, value);
                return node;
            } else {
                // 三种情况
                // 1. 无子节点， 直接返回null
                if (node.leftChild === null && node.rightChild === null) {
                    node = null;
                    return node;
                }

                // 2. 1个子节点，返回那个不为空的子节点
                if (node.leftChild === null){
                    node = node.rightChild;
                    return node;
                }
                if (node.rightChild === null){
                    node = node.leftChild;
                    return node;
                }

                // 3.两个子节点
                // 返回右子树的根节点，并用寻找到的节点的值替代该值，删除寻找到的节点
                const newNode = BST.prototype.getMinNode(node.rightChild);
                node.value = newNode.value; 
                node.rightChild = __remove(node.rightChild, node.value);
                return node;
            }
        }
    }

    // 4. 遍历
    // 前序遍历: 根左右
    preOrder(root = this.root) {
        const res = [];
        __preOrder(root);
        function __preOrder(node) {
            if (node !== null) {
                res.push(node.value);
                __preOrder(node.leftChild);
                __preOrder(node.rightChild);
            }
        }
        return res;
    }

    // 中序遍历: 左根右
    inOrder(root = this.root) {
        const res = [];
        __inOrder(root);
        function __inOrder(node) {
            if (node !== null) {
                __inOrder(node.leftChild);
                res.push(node.value);
                __inOrder(node.rightChild);
            }
        }
        return res;
    }

    // 后序遍历: 左右根
    postOrder(root = this.root) {
        const res = [];
        __postOrder(root);
        function __postOrder(node) {
            if (node !== null) {
                __postOrder(node.leftChild);
                __postOrder(node.rightChild);
                res.push(node.value);
            }
        }
        return res;
    }

    // 5.查找
    // 最小值: 最左子树的叶子节点
    getMinNode(root = this.root) {
        while(root.leftChild !== null) {
            root = root.leftChild;
        }
        return root;
    }

    // 最大值: 最右子树的叶子节点
    getMaxNode(root = this.root) {
        while(root.rightChild !== null) {
            root = root.rightChild;
        }
        return root;
    }

    // 特定值
    hasValue(value) {
        let root = this.root;
        while (root !== null) {
            if (root.value > value) {
                root = root.leftChild;
                continue;
            }
            if (root.value < value) {
                root = root.rightChild;
                continue;
            }
            return true;
        }
        return false;
    }
}

const bst = new BST();
bst.arrToTree([5, 3, 4, 1, 8, 7, 9]);
console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.getMinNode().value, bst.getMaxNode().value, bst.hasValue(8), bst.hasValue(9));
bst.removeNode(8);
console.log(bst.inOrder());

