/**
 * Created by zxlg on 2017/4/21.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input) {
    var arr = input.split('');
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        var temp = arr[arr.length-1-i];
        if(newArr.indexOf(temp)==-1){
            newArr.push(temp);
        }
    }
    console.log(newArr.join(''));
});