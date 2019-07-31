// 简明RBTREE定义(Knuth Donald)：
// 1. 每个节点要么是红色，要么是黑色
// 2. 根节点是黑色
// 3. 所有叶节点(NIL)都是黑色
// 4. 如果一个节点是红色，那么它的两个孩子都是黑色
// 5. 从任意一个节点出发，到达其后代NIL节点的路径中都包含相同个数的黑节点

// 性质: 通过对任何一条从根到叶子的简单路径上各个节点的颜色进行约束，确保没有一条路径会比其他路径长2倍，因而是近似平衡的。

const BST = require('./binarySearchTree');

class RBT extends BST {

    // 1. 树的节点插入
    insert(value) {
        const insertedNode = super.insert(value);
        // 插入节点初始均为red
        this._setRed(insertedNode);
        this.balance(insertedNode);
        return insertedNode;
    }

    balance(node) {
        // 1. 若为根节点，置为黑色
        if (node === this.root) {
            this._setBlack(node);
            return;
        }

        // 2. 父节点为黑色，不做处理
        if (this._isBlack(node.parent)) {
            return;
        }

        const grandParent = node.parent.parent;

        // 3.1. 父节点和叔节点均为红色
        if (node.uncle && this._isRed(node.uncle)) {
            this._setBlack(node.uncle);
            this._setBlack(node.parent);

            if (grandParent === this.root) return;
            
            this._setRed(grandParent);
            this.balance(grandParent);
            return;
        }
                
        // 3.2 叔节点不存在或者叔节点的颜色是黑色
        if (!node.uncle || this._isBlack(node.uncle)) {
            if (!grandParent) return;

            let newGrandParent;
            if (grandParent.leftChild === node.parent) {
                if (node.parent.leftChild === node) { // Left
                    newGrandParent = this.leftLeftRotation(grandParent); // Left-left
                } else {
                    newGrandParent = this.leftRightRotation(grandParent); // Left-right
                }
            } else {
                if (node.parent.rightChild === node) { // Right
                    newGrandParent = this.rightRightRotation(grandParent); // Right-right
                } else {
                    newGrandParent = this.rightLeftRotation(grandParent); // Right-left
                }
            }

            if (newGrandParent && newGrandParent.parent === null) { // 设置为根节点
                this.root = newGrandParent;
                this._setBlack(this.root); // 根节点设置为黑色
            }

            this.balance(newGrandParent); // 检查新的根节点是否符合红黑树规则
        }
    }

    _setRed(node) {
        if (!node) {
            return;
        }
        node.color = 'red';
    }

    _setBlack(node) {
        if (!node) {
            return;
        }
        node.color = 'black';
    }

    _isRed(node) {
        if (!node) {
            return false;
        }
        return node.color === 'red';
    }

    _isBlack(node) {
        if (!node) {
            return false;
        }
        return node.color === 'black';
    }
}

module.export = RBT;