/**
 * Created by zxlg on 2017/4/18.
 */
function truncate(arr) {
    return arr.filter(function (currentValue, index, array) {
        return index != array.length - 1
    });
}

function insert(arr, item, index) {
    var newArr = arr.slice(0);
    newArr.splice(index, 0, item);
    return newArr;
}

function duplicates(arr) {
    arr.sort();
    var newArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1] && newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function duplicates1(arr) {
    var newArr = [];
    var indexArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!newArr[arr[i]]) {
            newArr[arr[i]] = 1;
        }
        else {
            newArr[arr[i]]++;
        }
    }
    for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] > 1) {
            indexArr.push(j);
        }
    }
    return indexArr;
}

function duplicates2(arr) {
    //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
    var a = [], b = [];
    //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
    for (var i = 0; i < arr.length; i++) {
        if (!b[arr[i]]) {
            b[arr[i]] = 1;
            continue;
        }
        b[arr[i]]++;
    }
    //遍历b数组，将其中元素值大于1的元素下标存入a数组中
    for (var i = 0; i < b.length; i++) {
        if (b[i] > 1) {
            // console.log(a);
            a.push(i);
        }
    }
    return a;
}

function findAllOccurrences(arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (target == arr[i]) {
            newArr.push(i);
        }
    }
    return newArr;
}

function parse2Int(num) {
    var str = num.match(/\d+/);
    return parseInt(str);
}


function count(start, end) {
    //立即输出第一个值
    console.log(start++);
    var timer = setInterval(function () {
        if (start <= end) {
            console.log(start++);
        } else {
            clearInterval(timer);
        }
    }, 100);
    //返回一个对象
    return {
        cancel: function () {
            clearInterval(timer);
        }
    };
}

function fizzBuzz(num) {
    if (num == null || typeof num != 'number') {
        return false;
    }
    var a = num % 3;
    var b = num % 5;
    if (a == 0 && b == 0) {
        return 'fizzbuzz';
    } else if (a == 0) {
        return 'fizz';
    } else if (b == 0) {
        return 'buzz';
    } else {
        return num;
    }
}

function argsAsArray(fn, arr) {
    return fn.apply(this, arr);
}

//更改函数上下文
function speak(fn, obj) {
    //return fn.call(obj);
    //return fn.apply(obj,[]);
    return fn.bind(obj)();
}


function add() {
    //将argument转换成数组
    var args = Array.prototype.slice.call(arguments);
    var fn = function () {
        //拼接多次调用的参数为数组
        var arg_fn = Array.prototype.slice.call(arguments);
        //递归调用add
        return add.apply(null, args.concat(arg_fn));
    }
    //最后一次返回fn时，自动调用valueOf
    fn.valueOf = function () {
        return args.reduce(function (a, b) {
            return a + b;
        })
    }
    return fn;
}

//使用闭包
function makeClosures(arr, fn) {
    var result = [];
    result = arr.map(function (cv, index, arr) {
        return function () {
            return fn.call(this, arr[index]);
        }
    })
    return result;
}
var arr = [1, 2, 3];
var square = function (x) {
    return x * x;
};
// var funcs = makeClosures(arr, square);
// console.log(funcs[1]());

//使用arguments
function useArguments() {
    var arguments = Array.prototype.slice.call(arguments);
    return arguments.reduce(function (pv, cv, arr, index) {
        return pv + cv;
    }, 1)//初始值不用加，在这里做测试用
}
//console.log(useArguments(1,2,3,4));

function callIt(fn) {
    var arguments = Array.prototype.slice.call(arguments, 1);//arguments没有slice函数，所以调用原型slice函数
    return fn.apply(this, arguments);
}
// var a = 1; var b = 2;
// var test = function (first, second) { return first === a && second === b;};
// var result = callIt(test, a, b);
// console.log(result);

//二次封装函数
function partialUsingArguments(fn) {
    var args1 = Array.prototype.slice.call(arguments, 1);
    var result = function () {
        var args2 = Array.prototype.slice.call(arguments);
        var args = args1.concat(args2);
        return fn.apply(this, args);
    }
    return result;
}
// var a = 1; var b = 2; var c = 3; var d = 4;
// var test = function (first, second, third, forth) {return first + second + third + forth;};
// var result = partialUsingArguments(test, a, b)(c, d);
// console.log(result);

//柯里化
function curryIt(fn) {
    var length = fn.length;
    var args = [];
    var fun = function (x) {
        //args.push(x);
        args = args.concat(Array.prototype.slice.call(arguments));
        if (args.length == length) {
            return fn.apply(this, args);
        }
        return fun;
    }
    return fun;
}
// var fn = function (a, b, c) {
//     return a + b + c
// };
// var result = curryIt(fn)(1)(2)(3);
// console.log(result)

function createModule(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function () {
            return this.greeting + ',' + this.name;
        }
    }
}
// var a = createModule('111', '222');
// var b = a.sayit();
// console.log(b);

function valueAtBit(num, bit) {
    var str = num.toString(2);
    var chr = str.charAt(str.length - bit);
    return parseInt(chr, 10);
}
// console.log(valueAtBit(2,2))

// var str = '123';
// console.log(str[1]);

// function convertToBinary(num) {
//     return num.toString(2);
// }
// console.log(convertToBinary(65));

function convertToBinary(num) {
    var str = num.toString(2);
    while (str.length < 8) {
        str = '0' + str;
    }
    return str;
}

// console.log(convertToBinary(65));

function multiply(a, b) {
    // 先将数字转换为字符串
    var strA = "" + a;
    console.log(strA);
    var strB = "" + b;
    console.log(strB);
    // 先获取两个数的小数位数
    var lenA = (strA.indexOf(".") == -1) ? 0 : (strA.length - strA.indexOf(".") - 1);
    var lenB = (strB.indexOf(".") == -1) ? 0 : (strB.length - strB.indexOf(".") - 1);
    // 比较两数的精度，精度大的作为结果数精度
    len = Math.max(lenA, lenB);
    console.log("lenA " + lenA + "\t" + "lenB " + lenB + "\n");
    // 计算运算结果
    var result = null;
    result = parseFloat(a * b).toFixed(len);
    console.log("float " + result + "\n");
    return result;
}

function multiply1(a, b) {
    var strA = '' + a;
    var strB = '' + b;
    var lenA = (strA.indexOf('.') == -1) ? 0 : (strA.length - strA.indexOf('.') - 1);
    var lenB = (strB.indexOf('.') == -1) ? 0 : (strB.length - strB.indexOf('.') - 1);
    var len = lenA + lenB;
    var result = (a * b).toFixed(len);
    return result;
}
// console.log(multiply1(1.111, 1.111));

function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}
// var C = function(name) {this.name = name; return this;};
// var obj1 = new C('Rebecca');
// alterObjects(C, 'What\'s up');
// console.log(obj1.greeting);

//属性遍历
function iterate(obj) {
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + ': ' + obj[key]);
        }
    }
    return arr;
}
// var C = function () {
//     this.foo = 'bar';
//     this.baz = 'bim';
// };
// C.prototype.bop = 'bip';
// console.log(iterate(new C()));

function containsNumber(str) {
    if (str.search(/\d/) != -1) {
        return true;
    }
    else {
        return false;
    }
}
// a = containsNumber('www');
// console.log(a);


function containsRepeatingLetter(str) {
    var reg = /([a-zA-Z])\1/;
    // 	 匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。
    return reg.test(str);
}
// a = containsRepeatingLetter('aa');
// console.log(a);

function endsWithVowel(str) {
    var reg = /[aeiou]$/i;//匹配是否以元音结尾，不考虑大小写
    return reg.test(str);
}

function captureThreeNumbers(str) {
    var reg = /\d{3}/;
    var result = str.match(reg);
    if (result != null) {
        return result[0];//match()返回的是一个数组
    }
    else {
        return false;
    }
}
// a = captureThreeNumbers('9876543');

function matchesPattern(str) {
    //var reg = /^\d{3}-\d{3}-\d{4}$/;
    var reg = /^(\d{3}-){2}\d{4}$/;
    return reg.test(str);
}
// a = matchesPattern('800-555-1212');

function isUSD(str) {
    var reg = /(^\$[1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/;
    return reg.test(str);
}

var Iphone = function () {
    //由于在严格模式中，函数内部的this不能指向全局对象，默认等于undefined，
    // 导致不加new调用会报错（JavaScript不允许对undefined添加属性）。
    //'use strict'
    this.price = 2000;
}

var ip6 = Iphone();

console.log('不使用new,price变为全局变量，price：'+price);