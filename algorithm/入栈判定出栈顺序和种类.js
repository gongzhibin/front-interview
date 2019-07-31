// 现在有1 2 3 4 5五个数字，
// 规定这五个数字入栈的顺序不变，
// 但是中间可以任意的出栈，
// 出栈的数字就当做输出，
// 请写出程序输出所有的出栈的序列


//input 存放入栈序列
//satck 用于模拟入栈过程
//output 用于存放可能的出栈序列
var num = 0;
function searchStack(input, stack, output) {

    //输出
    if (input.length == 0 && stack.length == 0) {
        // console.log(output);
        num++;
    } else {
        if (input.length > 0) {
            //入栈
            stack.push(input.shift());
            searchStack(input, stack, output);
            input.push(stack.pop());//回溯恢复
        }
        if (stack.length > 0) {
            //出栈
            output.push(stack.pop());
            searchStack(input, stack, output);
            stack.push(output.pop());//回溯恢复
        }
    }
}

searchStack([1, 2, 3], [], []);