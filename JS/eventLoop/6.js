function sleep(time) {
    let startTime = new Date();
    while (new Date() - startTime < time) {}
    console.log('1s over');
}
setTimeout(() => {
    console.log('setTimeout - 1');
    setTimeout(() => {
        console.log('setTimeout - 1 - 1');
        sleep(1000);
    });
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 1 - then');
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 1 - then - then');
        });
    });
    sleep(1000);
});
  
setTimeout(() => {
    console.log('setTimeout - 2');
    setTimeout(() => {
        console.log('setTimeout - 2 - 1');
        sleep(1000);
    });
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 2 - then');
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 2 - then - then');
        });
    });
    sleep(1000);
});

// 浏览器
// setTimeout - 1 //1为单个task
// 1s over
// setTimeout - 1 - then
// setTimeout - 1 - then - then 
// setTimeout - 2 //2为单个task
// 1s over
// setTimeout - 2 - then
// setTimeout - 2 - then - then
// setTimeout - 1 - 1
// 1s over
// setTimeout - 2 - 1
// 1s over


// node
// setTimeout - 1 
// 1s over
// setTimeout - 2 //1、2为单阶段task
// 1s over
// setTimeout - 1 - then
// setTimeout - 2 - then
// setTimeout - 1 - then - then
// setTimeout - 2 - then - then
// setTimeout - 1 - 1
// 1s over
// setTimeout - 2 - 1
// 1s over


// 新版 node 执行情况与浏览器相同，所以浏览器环境为例，以 console 输出值代指值所在函数，执行过程如下
// <!--执行完主执行线程中的任务。-->
// <!--取出Microtask Queue中任务执行直到清空。-->
// <!--取出Macrotask Queue中一个任务执行。-->
// <!--取出Microtask Queue中任务执行直到清空。-->
// <!--重复3和4。-->
// 以 IQ 代指微任务队列，AQ 代指宏任务队列
// 1. 执行完主线程中任务：主执行线程执行完毕，setTimeout-1、setTimeout-2 进入等待
// 2. 清空 IQ：此时 IQ 中无任务
// 2. 执行 AQ 中一个任务： setTimeout-1 到时间后进入 AQ 中，被执行，执行过程中 setTimeout-1-1 进入等待状态，setTimeout-1-then 直接进入 IQ 队列，由于 setTimeout-1 中有 1s 等待，此时 setTimeout-2 肯定已经进入 AQ，setTimeout-1-1 也随后进入 AQ，此时结束状态为 IQ: [setTimeout-1-then]，AQ: [setTimeout-2, setTimeout-1-1]
// 3. 清空 IQ: 此时 IQ 中有 setTimeout-1-then，执行 setTimeout-1-then，执行过程中，setTimout-1-then-then 直接被加入 IQ，所以 IQ 没清空，所以继续执行 setTimout-1-then-then，IQ 被清空，此时结束状态为 IQ: [], AQ:  [setTimeout-2, setTimeout-1-1]
// 4. 执行 AQ 中一个任务：即执行 setTimeout-2
// 5. 清空 IQ: 这一步与 3 相似，所以输出 setTimeout-2-then、setTimeout-2-then-then，IQ 清空，此时结束状态为 IQ: [], AQ: [setTimeout-1-1, setTimeout-2-1]
// 6. 执行 AQ 中一个任务：即 setTimeout-1-1
// 7. 清空 IQ: 本身就为空
// 8. 执行 AQ 中一个任务：即 setTimeout-2-1



// 作者：toBeTheLight
// 链接：https://juejin.im/post/5aa5dcabf265da239c7afe1e
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。