/**
 * Created by zxlg on 2017/5/4.
 */
var fs = require('fs');
var path = require('path');

var fs = require('fs');
var data = fs.readFileSync('E:\\论文\\关联数据挖掘\\数据挖掘数据集\\chess.dat');
var str = data.toString();
var newStr = str.replace(/ /g,',');
fs.writeFile('E:\\论文\\关联数据挖掘\\数据挖掘数据集\\chess.csv',newStr,function(err){
    if(!err)
        console.log('写入成功！');
});
