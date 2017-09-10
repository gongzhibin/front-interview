// var reg = /^(\w+)\s(\d{4}-\d{2}-\d{2})\s(\d{2}:\d{2})~(\d{2}:\d{2})\s(\w)$/
// var flag = reg.test('U123 2016-06-02 20:00~22:00 A');
var reg = /^([0-1][0-9])|(2[0-4])$/
var flag = reg.test('01');
console.log(flag);