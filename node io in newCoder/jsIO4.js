/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
var num = 0;
rl.on('line', function(data) {
    if(num == 0){
        num = Number(data.trim());
    } else {
        inputs.push(data.trim());
        if (num == inputs.length) {
            // 处理
            var result = deal(inputs);
            // 输出结果
            console.log(result);
            // 清0
            inputs.length = 0;
            num = 0;
        }
    }
});
/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';
    // dosomething
    return inputs;
}