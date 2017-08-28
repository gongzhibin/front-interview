/**
 * Created by zxlg on 2017/5/4.
 */
function NumberOf1Between1AndN_Solution(n) {
    var str = n + '';
    var arr = str.split('');
    var sum = 0;
    var num;
    for (var i = 0; i < arr.length; i++) {
        num = parseInt(arr[i]);
        if (num > 1) {
            sum += Math.pow(10,arr.length - 1 - i);
        } else if(num == 1){
            if(i<arr.length-1){
                var subArr = arr.slice(i + 1);
            }else{
                var subArr = ['0'];
            }
            var subStr = subArr.join('');
            var subNum = parseInt(subStr);
            sum += subNum+1;
        }else{

        }
        // console.log(sum);
    }
    console.log(sum);
    return sum;
}
NumberOf1Between1AndN_Solution(19);