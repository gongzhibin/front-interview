/**
 * Created by zxlg on 2017/5/15.
 */
var fs = require('fs');
var path = require('path');

fs.readFile('E:/论文/数据库检索/数据/data1.txt', function (err, data) {
    if (err) {
        console.log(err);
        return;
    } else {
        var str = data.toString();
        var arr = str.split(',\r\n');
        var id = 0;
        var writeData = '';
        for (var index in arr) {
            id++;
            writeData += id + ',' + arr[index] + '\r\n';
        }
        fs.writeFile('E:/论文/数据库检索/数据/data.txt', writeData, (err) => {
            console.log(err)
        });
    }
})