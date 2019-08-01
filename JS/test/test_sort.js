var arr = [1, 3, 5, 8, 2, 4];
var obj = {
    'zxlg': [1, 24],
    'baby': [2, 5]
};
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

var sort_obj = [];
for (var index in obj) {
    sort_obj.push([index, obj[index]]);
}
sort_obj.sort(function (a, b) {
    return a[1][1] - b[1][1];
});
console.log(sort_obj);
