console.log("start");
process.nextTick(() => { // 微1.1
  console.log("a");
  setImmediate(() => {
    console.log("d");
  });
  new Promise(res => res()).then(() => {
    console.log("e");
    process.nextTick(() => {
      console.log("f");
    });
    new Promise(r => {
      r()
    }).then(() => {
      console.log("g");
    });
    setTimeout(() => {
      console.log("h");
    });
  });
});

setImmediate(() => { // 宏1.1
  console.log("b");
  process.nextTick(() => {
    console.log("c");
  });
  new Promise(res => res()).then(() => {
    console.log("i");
  });
});
console.log("end");

// start end a e f g h b c i d
// 正确： start end a e g f h b d c i

// 判断当前promise的回调队列是否还有回调函数没执行，如果有将继续执行，取出刚刚放入的promise的回调，输出 g
// 宏任务，取出所有setImmediate的回调函数并执行