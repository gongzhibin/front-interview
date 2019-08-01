function insert(arr, item, index) {
    return arr.slice(0,index).concat(item,arr.slice(index));
}

console.log(insert([1, 2, 3, 4], 'z', 2));

var x = 1; // 声明 + 初始化 x

console.log(x + ' ' + y);  // y 是未定义的

var y = 2;// 声明 + 初始化 y


//上面的代码和下面的代码是一样的 

var x = 1; // 声明 + 初始化 x

var y; //声明 y

console.log(x + ' ' + y);  //y 是未定义的

y = 2; // 初始化  y