// 4. 间隔时间执行函数
// new Queue() 
//     .task(1000, () => { 
//         console.log(1) 
//     })
//     .task(2000, () => { 
//         console.log(2) 
//     })
//     .task(1000, () => { 
//         console.log(3) 
//     })
//     .start() 
class Queue {
    constructor() {
        this.tasks = [];
    }

    task(time, fn) {
        this.tasks.push({ time, fn });
    }

    async start() {
        const { time, fn } = this.tasks.pop();
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                fn();
                resolve();
            }, time);
        });
        return this;
    }
};
