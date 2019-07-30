var reg = /key=(\w{0,})&/g;
var str = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
var t = reg.test(str);//测试是否存在
var e = reg.exec(str);//即使存在g也只匹配一个，所以需要用循环
var m = str.match(reg);//全部匹配
var newStr = str.replace(reg,'已替换 ');//全部替换

var end = 'end';