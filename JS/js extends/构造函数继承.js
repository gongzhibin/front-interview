function parent() {
    this.colors = ['red','blue','green'];
}


function son() {
    parent.call(this);
}

let instance1 = new son();
instance1.colors.push('black');
console.log(instance1.colors);

let instance2 = new son();
console.log(instance2.colors);
