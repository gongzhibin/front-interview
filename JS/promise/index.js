const PENDDING = 'PENDDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(fn) {
        if (!isFunction(fn)) {
            throw new Error('MyPromise accept a function as a parameter');
        }

        this._status = PENDDING;
        this._value = undefined;

        this._onFulfilledCallBacks = [];
        this._onRejectedCallBacks = [];

        try {
            fn(this._resolve.bind(this), this._reject.bind(this));
        } catch(err) {
            this._reject(err);
        }
    }

    _resolve(data) {
        if (this._status !== PENDDING) return;
        this._status = FULFILLED;
        this._value = data;

        this._onFulfilledCallBacks.forEach((callback) => {
            callback(data);
        });
    }

    _reject(err) {
        if (this._status !== PENDDING) return;
        this._status = REJECTED;
        this._value = err;

        this._onRejectedCallBacks.forEach((callback) => {
            callback(err);
        });
    }

    then(onFulfilled, onRejected) {
        const { _value, _status } = this;
        onFulfilled = isFunction(onFulfilled) ? onFulfilled : (data) => { return data; };
        onRejected = isFunction(onRejected) ? onRejected : (err) => { throw err; };

        return new MyPromise((onNextFulfilled, onNextRejected) => {
            switch (_status) {
            /* eslint-disable */
                case PENDDING:
                    const fulfilled = (value) => {
                        try {
                            const res = onFulfilled(value);
                            if (res instanceof MyPromise) {
                                res.then(onNextFulfilled, onNextRejected);
                            } else {
                                onNextFulfilled(res);
                            }
                        } catch (err) {
                            onNextRejected(err);
                        }
                    };
                    const rejected = (error) => {
                        try {
                            const err = onRejected(error);
                            if (err instanceof MyPromise) {
                                err.then(onNextFulfilled, onNextRejected);
                            } else {
                                onNextRejected(err);
                            }
                        } catch (err) {
                            onNextRejected(err);
                        }
                    };
                    this._onFulfilledCallBacks.push(fulfilled);
                    this._onRejectedCallBacks.push(rejected);
                    break;
                case FULFILLED:
                    const res = onFulfilled(_value);
                    onNextFulfilled(res);
                    break;
                case REJECTED:
                    const err = onRejected(_value);
                    onNextRejected(err);
                    break;
            }
            /* eslint-enable */
        });
    }

    catch(onRejected) {
        this.then(undefined, onRejected);
    }

    finally() {

    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(err) {
        return new MyPromise((resolve, reject) => {
            reject(err);
        });
    }

    static all(promiseArr) {
        return new MyPromise((resolve, reject) => {
            let resArr = [];
            let len = 0;
            promiseArr.forEach((promise, index) => {
                promise.then((res) => {
                    resArr[index] = res;
                    len++;
                    if (len === promiseArr.length) resolve(resArr);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
}

function isFunction(fn) {
    return typeof fn === 'function';
}

var myPromise = new MyPromise((resolve) => {
    setTimeout(() => {
        resolve('after 1s');
    }, 1000);
});

var p1 = myPromise.then((res) => {
    return new MyPromise((resolve, reject) => {
        console.log(res);
        // reject('reject a promise');
        resolve('p1: resolve a promise');
    });
});
var p2 = p1.then((res) => {
    console.log('then: ', res);
    return 'p2: return string';
}, (err) => {
    console.log('catch: ', err);
    return 'p2: return string';
});
var p3 = p2.then('not function');
var p4 = p3.then(res => {
    console.log(res);
});

MyPromise.all([p1, p2, p3, p4]).then((res) => {
    console.log(res);
}, (err) => {
    console.log('MyPromise all: ', err);
});