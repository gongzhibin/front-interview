function add() {
    var item = { name: '鸡蛋', price: 45 }
    var tbody = document.getElementsByTagName('tbody')[0];
    var addItem = document.createElement('tr');
    addItem.innerHTML = '<td>' + item.name + '</td><td>' + item.price.toFixed(2)
        + '</td><td><a href="javascript:void(0);">删除</a></td>';
    tbody.appendChild(addItem);
    var newItem = document.getElementsByTagName('a');

    //为删除绑定bind事件
    var delete_item = newItem[newItem.length - 1];
    delete_item.onclick = bind;

    //获取价格,并计算出新价格
    tbody = document.getElementsByTagName('tbody')[0];
    var tfoot = document.querySelectorAll('tfoot')[0];
    var sum_price_node = tfoot.children[0].children[1];
    var sum_price_text = sum_price_node.innerText;
    var sum_price = parseFloat(sum_price_text.split('(')[0]);
    var new_sum_price = sum_price + item.price;
    var new_length = tbody.children.length + 1;

    //修改总价格
    sum_price_node.innerHTML = new_sum_price.toFixed(2) + '(' + new_length + '件商品)';
}

function bind(event) {
    var click_item = event.target;
    var tbody = document.getElementsByTagName('tbody')[0];
    var tfoot = document.querySelectorAll('tfoot')[0];
    var delete_item = click_item.parentNode.parentNode;
    //获取价格,并计算出新价格
    var sum_price_node = tfoot.children[0].children[1];
    var sum_price_text = sum_price_node.innerText;
    var sum_price = parseFloat(sum_price_text.split('(')[0]);
    var delete_item_price = parseFloat(delete_item.children[1].innerText);
    var new_sum_price = sum_price - delete_item_price;
    var new_length = tbody.children.length - 1;

    //修改总价格
    sum_price_node.innerHTML = new_sum_price.toFixed(2) + '(' + new_length + '件商品)';

    //删除节点
    tbody.removeChild(delete_item);
}

//每个a节点均添加bind函数
var a_list = document.getElementById('jsTrolley').getElementsByTagName('a');
for (var i = 0; i < a_list.length; i++) {
    a_list[i].onclick = bind;
}

//添加button按钮添加物品
var button = document.createElement('button');
button.innerHTML = '<button>添加物品</button>';
document.body.appendChild(button);
var button = document.getElementsByTagName('button')[0];
button.onclick = add;