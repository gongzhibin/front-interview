async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end------node2---browser1");
    // 针对await后面的对象
    // 对于非promise对象, await下面的代码，会先于外部Promise回调进入的微任务执行
    // 对于promise对象，await下面的代码，会在外部Promise回调进入的微任务执行完成后执行
    // node将await后面的对象均转为promise对象处理，相当于promise.then(执行code)，而browser应不做处理，相当于直接执行code
}

async function async2() {
   console.log('async2');
}

console.log("script start");

setTimeout(function () {
    console.log("settimeout");
},0);

async1();

new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2----node1---browser2");
});
console.log('script end');

// script start 
// async1 start
// async2
// promise1
// script end
// promise2
// async1 end
// settimeout

// async function async1() {
//     console.log('2')
//     await async2()
//     console.log('7')
//   }
  
//   async function async2() {
//     console.log('3')
//   }
  
//   setTimeout(function () {
//     console.log('8')
//   }, 0)
  
//   console.log('1')
//   async1()
  
//   new Promise(function (resolve) {
//     console.log('4')
//     resolve()
//   }).then(function () {
//     console.log('6')
//   })
//   console.log('5')