/**
 * Created by zxlg on 2017/5/3.
 */
// var pushV = [1, 2, 3, 4, 5];
var pushV = [0];

//var popV = [4, 5, 3, 2, 1];
//var popV = [1, 2, 3, 4, 5];
// var popV = [3, 5, 4, 2, 1];
var popV = [2];
function IsPopOrder(pushV, popV) {
    var pushArr = [];//表示仍在栈中的元素
    var j = 0;
    var last = -1;
    for (var i = 0; i < popV.length; i++) {
        if (j == pushV.length) {//当pushV中最后一个元素弹出时，检查pushArr栈中元素是否正确的pop出，与原顺序相反表示正确
            if (pushArr[last--] != popV[i]) {
                return false;
            }
        }
        else {
            for (; j < pushV.length; j++) {
                if (popV[i] != pushV[j]) {//到找到相同元素为止，其他的元素都压入pushArr栈中
                    pushArr.push(pushV[j]);
                    last = pushArr.length - 1;//确定最后一个元素
                    if (j == last) {//如果知道最后都没找到相同元素，表明弹出元素不在pushV的数组中
                        return false;
                    }
                } else {
                    j++;//相同的元素不压入,因为表示已经弹出
                    break; //跳出该层循环
                }
            }
        }
    }
    return true;
}
console.log(IsPopOrder(pushV, popV));