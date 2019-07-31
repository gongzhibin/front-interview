String.prototype.getSuffixList = function (suffix) {
    //TODO：编写代码逻辑 ，不使用正则
    //输出结果
    var arr = this.split(' ');
    var length = suffix.length;
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].lastIndexOf(suffix) == arr[i].length - length) {
            if (obj[arr[i]]) {
                obj[arr[i]]++;
            } else {
                obj[arr[i]] = 1;
            }
        }
    }
    var sortArr = [];
    for(var index in obj){
        sortArr.push([index,obj[index]]);
    }
    sortArr.sort(function(a,b){
        return b[1] -  a[1];
    })
    var result = '';
    for (var index in sortArr) {

        result += sortArr[index][0] + '=' + sortArr[index][1] + ',';
    }
    result = result.slice(0, result.length - 1);

    return result;//字符串
};

var str = new String();
var res = 'you are heheful beautiful very beautiful helloful'.getSuffixList('ful');
console.log(res);