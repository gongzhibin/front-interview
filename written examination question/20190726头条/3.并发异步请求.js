// 3.请实现如下的函数，可以批量请求数据，所有的URL地址在urls参数中
// 同时可以通过 max 参数控制请求的并发度
// 当所有请求结束之后，需要执行callback 回调函数。
// 发请求的函数可以直接使用fetch即可

function sendRequest(urls, max, callback) {
    const urlsLen = urls.length;
    let completeUrls = 0;

    for(let i = 0; i < max; i++) {
        fetchOne();
    }

    function fetchOne() {
        if (urls.length === 0) {
            if(completeUrls === urlsLen) {
                callback();
            }
            return;
        }

        const url = urls.shift();
        fetch(url).then(() => {
            completeUrls++;
            fetchOne();
        });
    }
}
