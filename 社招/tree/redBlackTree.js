// 简明RBTREE定义(Knuth Donald)：
// 1. 每个节点要么是红色，要么是黑色
// 2. 根节点是黑色
// 3. 所有叶节点(NIL)都是黑色
// 4. 如果一个节点是红色，那么它的两个孩子都是黑色
// 5. 从任意一个节点出发，到达其后代NIL节点的路径中都包含相同个数的黑节点

// 性质: 通过对任何一条从根到叶子的简单路径上各个节点的颜色进行约束，确保没有一条路径会比其他路径长2倍，因而是近似平衡的。

const COLOR = {
    red: 'red',
    black:'black'
};
class RBTNode {
    constructor(value, color, leftChild, rightChild) {
        if (!COLOR(color)) {
            throw new Error(`color can only be red or black`);
        }
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

class RBT {
    constructor(arr) {
        this._init();
        this.create(arr);
    }

    _init() {
        this.nullNode = new RBTNode(Number.NEGATIVE_INFINITY, 'black', null, null);
        this.nullNode.leftChild = this.nullNode;
        this.nullNode.rightChild = this.nullNode;
        this.nullNode.type = 'null';
        // init header
        this.header = new RBTNode(Number.NEGATIVE_INFINITY, 'black', this.nullNode, this.nullNode);

        // init nodes to store parent, grandparent and grandgrandparent
        this.X = null;
        this.P = null;
        this.GP = null;
        this.GGP = null;
        // X's sister
        this.S = null;
    }

    create(arr) {
        arr.forEach(item => {
            this.header = this.insert(item);
        });
    }

}