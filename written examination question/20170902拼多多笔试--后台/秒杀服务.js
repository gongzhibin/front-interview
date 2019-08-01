//输入输出
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//初始化活动ID
var activityId = -1;

// 商品格式
// {活动id:[商品id, 剩余物品, 开始时间, 结束时间, 商品人气值, 结束时间(剩余物品为0)]}
var add = {};

// M件物品
var M = 0;

// N次操作
var N = 0;

// 商品
// {商品id:[人气，添加物品，开始时间，结束时间]}
// var goods = {

//     1001: [1, 10],
//     1002: [1, 10],
//     1003: [2, 10],
//     1004: [2, 10],
//     1005: [3, 10],
//     1006: [3, 10]
// }
var goods = {};


//判断输入行数
var flag = 0;

//打印内容
var print = '';


// add函数
function addActivity(time, startTime, endTime, activityGoodsId, goodsAddNum) {
    //获取物品数目
    var goodsNum = goods[activityGoodsId][1];

    // 若添加物品大于总物品数目返回-1
    if (goodsNum < goodsAddNum) {
        return -1;
    }

    //活动ID+1
    activityId++;
    // 获取商品人气值
    var goodsPop = goods[activityGoodsId][0];
    // 活动对象添加项目
    add[activityId] = [activityGoodsId, goodsAddNum, goodsPop, startTime, endTime];

    // 返回活动ID
    return activityId;
}


function buyGoods(time, activityId, quantity) {

    //获取活动商品ID
    var activityGoodsId = add[activityId][0];
    // 获取活动商品开始结束时间
    var startTime = add[activityId][3];
    var endTime = add[activityId][4];
    //时间判定
    if (time < startTime || time >= endTime) {
        return -1;
    }    // 剩余物品数目判定
    else if (quantity > add[activityId][1]) {
        return -1;
    } else {
        // 减少剩余物品
        add[activityId][1] -= quantity;
        //商品售罄，添加结束时间
        if (add[activityId][1] == 0) {
            add[activityId].push(time);
        }
        return 0;
    }
}
function getList(time) {
    //进行中(未售罄)：依次按商品人气从高到低，商品ID从小到大排序
    var timing_solding = [];
    //进行中(售罄）：依次按最后卖出时间从晚到早，商品人气值从高到低，商品ID从小到大排序
    var timing_no_goods = [];
    //未开始：依次按开始时间从早到晚，商品人气值从高到低，商品ID从小到大排序
    var no_timing = [];
    // 已结束：不返回

    //将所有物品分类归入各个数组中
    for (var activityGoodsId in add) {
        var startTime = add[activityGoodsId][3];
        var endTime = add[activityGoodsId][4];
        var activity_sold_time = add[activityGoodsId][5];
        if (time >= startTime && time < endTime) {
            if (activity_sold_time) {
                timing_no_goods.push([activityGoodsId, add[activityGoodsId]]);
            } else {
                timing_solding.push([activityGoodsId, add[activityGoodsId]]);
            }
        } else {
            if (time < startTime) {
                no_timing.push([activityGoodsId, add[activityGoodsId]]);
            } else {
                // 已结束，不返回
            }

        }
    }

    // 辅助数组排序
    // 1 进行中(未售罄)
    // 依次按商品人气从高到低
    //商品ID从小到大排序(默认)
    timing_solding.sort(function (a, b) {
        return b[1][2] - a[1][2];
    });

    // 2 进行中(售罄）
    // 依次按最后卖出时间从晚到早
    // 商品人气值从高到低
    //商品ID从小到大排序
    timing_no_goods.sort(function (a, b) {
        if (a[1][5] != b[1][5]) {
            return b[1][5] - a[1][5];
        } else {
            return b[1][2] - a[1][2];
        }
    });

    // 3 未开始
    // 依次按开始时间从早到晚
    // 商品人气值从高到低
    // 商品ID从小到大排序
    no_timing.sort(function (a, b) {
        if (a[1][3] != b[1][3]) {
            return a[1][3] - b[1][3];
        } else {
            return b[1][2] - a[1][2];
        }
    });


    // 定义最终排序activityId数组
    var sort_activityId = [];
    for (var i = 0; i < timing_solding.length; i++) {
        sort_activityId.push(timing_solding[i][0]);
    }
    for (var i = 0; i < timing_no_goods.length; i++) {
        sort_activityId.push(timing_no_goods[i][0]);
    }
    for (var i = 0; i < no_timing.length; i++) {
        sort_activityId.push(no_timing[i][0]);
    }


    return sort_activityId.join(' ');
}

rl.on('line', function (input) {
    if (flag == 0) {
        var arr = input.split(' ');
        M = parseInt(arr[0]);
        N = parseInt(arr[1]);
        flag++;
    } else if (flag >= 1 && flag <= M) {
        var arr = input.split(' ');
        goods[parseInt(arr[0])] = [parseInt(arr[1]), parseInt(arr[2])];
        flag++;
    } else if (flag >= M + 1 && flag <= (M + N)) {
        var arr = input.split(' ');
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            if (i != 1) {
                arr[i] = parseInt(arr[i]);
            }
        }
        if (arr[1] == 'add') {
            var returnAdd = addActivity(arr[0], arr[2], arr[3], arr[4], arr[5]);
            print += returnAdd + '\n';
            // console.log(returnAdd);
        } else if (arr[1] == 'buy') {
            var returnBuy = buyGoods(arr[0], arr[2], arr[3]);
            print += returnBuy + '\n';
        } else if (arr[1] == 'list') {
            var returnLsit = getList(arr[0]);
            print += returnLsit + '\n';
        }
        if (flag == (M + N)) {
            console.log(print);
        }
        flag++;
    } else {
        //变量初始化
        flag = 0;
        activityId = -1;
        add = {};
        M = 0;
        N = 0;
        goods = {};
        print = '';
    }


}).on('close', function () {

});