// // 1. 事件循环(node与浏览器区别)
// setTimeout(function() {
//     console.log('setTimeout');
// })

// new Promise(function(resolve) {
//     console.log('promise');
//     for (let i = 0; i < 10000; i++) {
//         if(i === 10) {
//             console.log('for');
//         }
//         i == 9999 && resolve('resolve');
//     }
// }).then(function(val) {
//     console.log(val);
// });

// console.log('console');


// // 2. 类型判断
// a = [1, 2, 3]
// typeof a

// // Object
// // for in
// // for of
// // Object.keys()

// // 3. 作用域提升
// function showName() {
//     console.log('Toutiao');
// }
// showName();
// function showName() {
//     console.log('OceanEngine');
// }
// showName();
// var myname = "abc"
// function showName2(){
//   console.log(myname);
//   var myname = "aabbcc"
//   console.log(myname);
// }
// showName2();
// let myname3= 'toutiao'
// {
//   console.log(myname3) 
//   let myname3= 'oceanengine'
// }

// // 4. 事件捕获，事件冒泡
// <body>
//   <div id="i"/>
// </body>

// document.body.addEventListener("mousedown", () => {
//   console.log("key1")
// }, true)

// document.getElementById("i").addEventListener("mousedown", () => {
//   console.log("key2")
// }, true)

// document.body.addEventListener("mousedown", () => {
//   console.log("key3")
// }, false)

// document.getElementById("i").addEventListener("mousedown", () => {
//   console.log("key4")
// }, false)


// // 5. 事件节流，防抖
// function debounce(time, fn){
//     let flag = true;
//     if(!flag) return;
//     (function() {
//         flag = false;
//         setTimeout(() => {
//             fn();
//             flag = true;
//         }, time);
//     })();
// }

// 6. CSS相关
// position
// box-sizing
// translateY、translate3d、scrollTop

// 7. 跨域

// 8. 存储方式对比
// cookie
// localstorage
// sessionstorage


// 8. 出栈判断

function validStack (inArr, outArr) {
    const temp = [];
    while((inArr.length || temp.length) && outArr.length) {
        let inEl = temp[0];
        let outEl = outArr[0];
        if(inEl === outEl) {
            temp.shift();
            outArr.shift();
        } else {
            if(!inArr.length) return false;
            temp.unshift(inArr.shift());
        }
    }
    if(temp.length > 0) return false;
    return true;    
}
const res = validStack([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
console.log(res);

// 9. 大数相加

// 10. 性能优化

// 11. PWA
