/**
 * Created by zxlg on 2017/6/15.
 */
var fs = require('fs');
var path = require('path');

var fs = require("fs");
var data = fs.readFileSync("C:\\Users\\zxlg\\Desktop\\新建文本文档.txt");
var str = data.toString();
var arr = str.split(' ');
var num = parseInt(arr[0]);
var operation = parseInt(arr[1]);
console.log(num+' '+operation);//第一行
var initial = arr.slice(2, num + 2);
console.log(initial.join(' '));//第二行
for (var i = 0; i < operation; i++) {
    console.log(arr[num + 2 + i * 3] + ' ' + arr[num + 3 + i * 3] + ' ' + arr[num + 4 + i * 3]);
}
// var newStr = str.replace(/ /g, ',')
// fs.writeFile("E:\\论文\\关联数据挖掘\\数据挖掘数据集\\chess.csv", newStr, function (err) {
//     if (!err)
//         console.log("写入成功！")
// })