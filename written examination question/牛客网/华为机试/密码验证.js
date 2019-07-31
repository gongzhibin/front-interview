/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim();
    // 处理
    var result = deal(inputs);
    // 输出结果
    console.log(result);
});
/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = 'OK';
    // dosomething
    regUpper = /[A-Z]/;
    regLower = /[a-z]/;
    regNum = /[0-9]/;
    regOther = /\W/;
    if(inputs.length<=8){
        result = 'NG';
    }
    var count = 0;
    if(regUpper.test(inputs)){
        count++;
    }
    if(regLower.test(inputs)){
        count++;
    }
    if(regNum.test(inputs)){
        count++;
    }
    if(regOther.test(inputs)){
        count++;
    }
    if(count<3){
        result = 'NG';
    }
    var json = {};
    for(var i=0;i<inputs.length-2;i++){
        var index = inputs.slice(i,i+3);
        if(!json[index]){
            json[index]=i;
        }
        else{
            result = 'NG';
            break;
        }
    }
    return result;
}