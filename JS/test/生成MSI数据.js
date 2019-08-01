/**
 * Created by zxlg on 2017/5/12.
 */
var fs = require('fs');
var path = require('path');

var ID = 1;//1-10000

var MMSI = 413000000;//1、MMSI（字符型）：413000000-413900000之间（不重复）

//从以下项中随机、均匀产生
var type = ['passenger ship', 'fishing ship', 'tugboat', 'dredger', 'tanker',
    'cargo ship', 'barge', 'dugout', 'lifeboat', 'steamer',
    'trawler', 'yawl', 'sailing ship', 'gunboat', 'cruiser'];

var LON = 114.100;//114.100-114.700之间（三位小数，不足补零）

var LAT = 30.200;//30.200-30.800之间（三位小数，不足补零）

var Course = 0.00;//0-300.00之间（两位小数，不足补零）

var Port = ['Chongqing', 'Yichang', 'Wuhan', 'Jiujiang', 'Anqing',
    'Wuhu', 'Nanjing', 'Zhenjiang', 'Nantong', 'Shanghai', 'Yueyang',
    'Yibin', 'Huanggang', 'Jingzhou', 'Shishou', 'Tongling'];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var json = new Object();
var newMMSIArr = [];
var addItem = function () {
    var str = '';
    var typeIndex = getRandomArbitrary(0, 14);
    var randomMMSI = getRandomArbitrary(0, 900000);
    while (newMMSIArr[randomMMSI] == 1) {
        console.log(randomMMSI);
        randomMMSI = getRandomArbitrary(0, 900000);
    }
    newMMSIArr[randomMMSI] = 1;
    var newLON = (LON + getRandomArbitrary(0, 600) * 0.001).toFixed(3);
    var newLAT = (LAT + getRandomArbitrary(0, 600) * 0.001).toFixed(3);
    var newCourse = (Course + getRandomArbitrary(0, 30000) * 0.01).toFixed(2);
    var port1 = Port[getRandomArbitrary(0, 14)];
    var port2 = Port[getRandomArbitrary(0, 14)];
    while (port1 == port2) {
        port2 = Port[getRandomArbitrary(0, 14)];
    }
    var newPort = port1 + ',' + port2;
    var newMMSI = randomMMSI + 413000000;
    str = ID + '$' + newMMSI + '$' + type[typeIndex] + '$' + newLON + '$' + newLAT + '$' + newCourse + '$' + newPort;
    // json['ID'] = ID;
    // json['MMSI'] = newMMSI;
    // json['Type'] = type[typeIndex];
    // json['LON'] = newLON;
    // json['LAT'] = newLAT;
    // json['Course'] = newCourse;
    // json['Port'] = newPort;
    ID++;
    var jsonStr = JSON.stringify(json);
    // console.log(jsonStr);
    // return jsonStr;
    return str;
};

var newStr = '';
// var newArr = new Array();
for (var i = 0; i < 10000; i++) {
    newStr += addItem() + '\r\n';
    // newArr.push(addItem());
}
// console.log(newStr);
// fs.writeFile("E:\\mmsi.json", newArr, function (err) {
//     if (!err)
//         console.log("写入json成功！")
// })

fs.writeFile('E:\\mmsi.txt', newStr, function (err) {
    if (!err)
        console.log('写入txt成功！');
});
// fs.writeFile("E:\\mmsi.csv", newStr, function (err) {
//     if (!err)
//         console.log("写入csv成功！")
// })
// fs.writeFile("E:\\mmsi.prn", newStr, function (err) {
//     if (!err)
//         console.log("写入prn成功！")
// })
