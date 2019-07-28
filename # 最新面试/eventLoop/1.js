// 微任务:
// 1. 原生的Promise    -> 其实就是我们上面提到的VIP用户
// 2. process.nextTick -> 其实就是我们上面提到的超级VIP用户
// process.nextTick的执行优先级高于Promise的宏任务

// 宏任务: 
// 1. setTimeout        -> 其实就是我们上面提到的普通用户，
// 2. setImmediate      -> 其实就是我们上面提到的垃圾用户，
// setTimeout的执行优先级高于setImmediate的

// 执行顺序: 
// 1. 在一次事件循环中，JS会首先执行整体代码script
// 2. 执行完后会去判断微任务队列中是否有微任务，如果有，将它们逐一执行
// 4. 执行完成所有微任务完后在一次执行宏任务

setTimeout(() => { // 宏2
    console.log('a');
    new Promise(res => {
        res()
    }).then(() => {
        console.log('c');
    })
    process.nextTick(() => {
        console.log('h');
    })
}, 0)
console.log('b');

process.nextTick(() => { // 微1
    console.log('d');
    process.nextTick(() => {
        console.log('e');
        process.nextTick(() => {
            console.log('f');
        })
    })
}) 
    
setImmediate(() => { // 微2 （// 宏3，理解错误，为宏任务，且优先级较低）
    console.log('g');
})
// 我的 b d e g f a h c
//  b d e f a h c g