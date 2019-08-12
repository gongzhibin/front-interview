class LinkListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class LinkList {
    constructor(arr) {
        this.head = this.create(arr);
    }

    create(arr) {
        const head = new LinkListNode(arr[0]);
        let current = head;

        for(let i = 1; i < arr.length; i++) {
            const temp = new LinkListNode(arr[i]);
            current.next = temp;
            current = temp;
        }
        return head;
    }

    reverse() {
        this._reverse(this.head);
        return this.head;
    }

    _reverse(node, parentNode = null) {
        // 置后
        if (node && node.next) {
            this._reverse(node.next, node);
        } else {
            this.head = node;
        }
        node.next = parentNode;


        // 置前
        // const child = node.next;
        // node.next = parentNode;
        // if (node && child) {
        //     this._reverse(child, node);
        // } else {
        //     this.head = node;
        // }
    }
}

let list = new LinkList([1, 2, 3]);
list.reverse();
list.head;