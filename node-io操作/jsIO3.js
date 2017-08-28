process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = [];

process.stdin.on('data', function (data) {
    input += data;
});

process.on('SIGINT', function() {
    // 你的处理
    process.exit(0);
})
// 这样的话，使用ctrl+c就可以得到输出