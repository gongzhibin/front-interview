let values = [10, 20, 33, 44];
var res = Math.max(...values);
var res1 = Math.max(10, 20, 33, 44);
console.log(res);
console.log(res1);


let values1 = [-10, -20, -33, -44];
console.log(Math.max(...values1, 0, 55));
