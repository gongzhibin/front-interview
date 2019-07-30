/**
 * Created by zxlg on 2017/6/14.
 */
// https://www.nowcoder.com/practice/3897c2bcc87943ed98d8e0b9e18c4666?tpId=49&tqId=29275&rp=1&ru=%2Fta%2F2016test&qru=%2Fta%2F2016test%2Fquestion-ranking&tPage=1

// 题目描述
// 老师想知道从某某同学当中，分数最高的是多少，现在请你编程模拟老师的询问。当然，老师有时候需要更新某位同学的成绩.
//     输入描述:
// 输入包括多组测试数据。
// 每组输入第一行是两个正整数N和M（0 < N <= 30000,0 < M < 5000）,分别代表学生的数目和操作的数目。
// 学生ID编号从1编到N。
// 第二行包含N个整数，代表这N个学生的初始成绩，其中第i个数代表ID为i的学生的成绩
// 接下来又M行，每一行有一个字符C（只取‘Q’或‘U’），和两个正整数A,B,当C为'Q'的时候, 表示这是一条询问操作，他询问ID从A到B（包括A,B）的学生当中，成绩最高的是多少
// 当C为‘U’的时候，表示这是一条更新操作，要求把ID为A的学生的成绩更改为B。
//
//
// 输出描述:
//     对于每一次询问操作，在一行里面输出最高成绩.
//
//     输入例子:
// 5 7
// 1 2 3 4 5
// Q 1 5
// U 3 6
// Q 3 4
// Q 4 5
// U 4 5
// U 2 9
// Q 1 5
//
// 输出例子:
//     5
// 6
// 5
// 9

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var flag = 0;
var numArr = [];
var initial = [];
var initialNum = [];
var operation = [];
var N;
var M;
var index1;
var index2;
var indexMax;
var indexMin;
var newNumArr = [];
var maxNum;
var index;
var newNum;
var answer = [];
rl.on('line', function (input) {
    if (flag == 0) {
        numArr = input.split(' ');
        // console.log('numArr: ' + numArr);
        N = parseInt(numArr[0]);
        M = parseInt(numArr[1]);
    }
    else if (flag == 1) {
        initial = input.split(' ');
        // console.log('initial: ' + initial);
        for (var i = 0; i < initial.length; i++) {
            initialNum[i] = parseInt(initial[i]);
        }
        // console.log('initialNum: ' + initialNum);
    } else {
        operation = input.split(' ');
        if (operation[0] == 'Q') {
            index1 = parseInt(operation[1]);
            index2 = parseInt(operation[2]);
            indexMax = index1 > index2 ? index1 : index2;
            indexMin = index1 < index2 ? index1 : index2;
            // console.log('indexMin: ' + indexMin + ' ' + 'indexMax: ' + indexMax);
            newNumArr = initialNum.slice(indexMin - 1, indexMax);
            // console.log(newNumArr.join(' '));
            maxNum = max(newNumArr);
            console.log(maxNum);
            answer.push(maxNum);
        }
        if (operation[0] == 'U') {
            index = parseInt(operation[1]);
            newNum = parseInt(operation[2]);
            // console.log(newNum);
            initialNum[index - 1] = newNum;
            // console.log('initialNum: ' + initialNum)
        }
    }
    flag++;
    if (flag == M + 2) {
        // console.log(answer.join('\n'));
        flag = 0;
        answer = [];
    }

}).on('close', function () {

});

var max = function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}