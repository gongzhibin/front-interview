// BST定义 对于任意一个节点均满足：
// 1. 所有位于左子树的节点值均比该节点值小
// 2. 所有位于右子树的节点值均大于等于该节点值
// 3. 所有左子树和右子树也必须是BST
class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
    get uncle() {
        if (!this.parent) {
            return undefined;
        }
        if (!this.parent.parent) {
            return undefined;
        }
        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined;
        }
        if (this.parent === this.parent.parent.left) {
            return this.parent.parent.right;
        }
        return this.parent.parent.left;
    }
}

class BST {
    constructor(arr) {
        this.root = null;
        this.create(arr);
    }

    // 基于数组构建二叉查找树
    create(arr) {
        arr.forEach((item) => {
            this.insert(item); 
        });
    }

    // 1. 树的节点插入
    insert(value) {
        const node = new Node(value);
    
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
                    node.parent = parent;
                    break;
                }
            } else {
                current = current.rightChild;
                if (current === null) {
                    parent.rightChild = node;
                    node.parent = parent;
                    break;
                }
            }
        }
        return node;
    }

    // 3. 删除节点
    removeNode(value, root = this.root) {
        _remove(root, value);
        function _remove(node, value) {
            if (node === null) {
                return null;
            }
            if (value < node.value) {
                node.leftChild = _remove(node.leftChild, value);
                return node;
            } else if (value > node.value) {
                node.rightChild = _remove(node.rightChild, value);
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
                node.rightChild = _remove(node.rightChild, node.value);
                return node;
            }
        }
    }

    // 4. 遍历
    // 前序遍历: 根左右
    preOrder(root = this.root) {
        const res = [];
        _preOrder(root);
        function _preOrder(node) {
            if (node !== null) {
                res.push(node.value);
                _preOrder(node.leftChild);
                _preOrder(node.rightChild);
            }
        }
        return res;
    }

    // 中序遍历: 左根右
    inOrder(root = this.root) {
        const res = [];
        _inOrder(root);
        function _inOrder(node) {
            if (node !== null) {
                _inOrder(node.leftChild);
                res.push(node.value);
                _inOrder(node.rightChild);
            }
        }
        return res;
    }

    // 后序遍历: 左右根
    postOrder(root = this.root) {
        const res = [];
        _postOrder(root);
        function _postOrder(node) {
            if (node !== null) {
                _postOrder(node.leftChild);
                _postOrder(node.rightChild);
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

const bst = new BST([5, 3, 4, 1, 8, 7, 9]);
console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.getMinNode().value, bst.getMaxNode().value, bst.hasValue(8), bst.hasValue(9));
bst.removeNode(8);
console.log(bst.inOrder());

module.export = BST;
