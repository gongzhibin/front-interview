// 父: i
// 左子: 2i + 1
// 右子: 2i + 2
// 父相对于子Math.floor((j - 1) / 2)

// 最大堆调整（Min-Heapify）：将堆的末端子节点作调整，使得子节点永远大于父节点
// 创建最大堆（Build-Min-Heap）：将堆所有数据重新排序，使其成为最小堆
// 堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最小堆调整的递归运算
function topK(arr, K) {
    let topKArr = arr.slice(0, K);
    topKArr = heapSort(topKArr);
    for (let i = K; i < arr.length; i++) {
        if (arr[i] > topKArr[0]) {
            topKArr[0] = arr[i];
            sort(topKArr);
        }
    }
    return topKArr;
}

function heapSort(arr) {
    const len = arr.length;
    if(len <= 1) return arr;
    arr = buildMinHeap(arr);
    arr = sort(arr);
    return arr;
}

function buildMinHeap(arr) {
    const len = arr.length;
    // 创建最小堆， 从第一个非叶子节点下到上，从右到左
    for(let i = Math.floor(len / 2 - 1); i >= 0; i--) {
        minHeapify(arr, i, len);
    }
    return arr;
}

function sort(arr) {
    const len = arr.length;
    // 排序，每一次循环找出一个当前最小值，数组长度减1
    for(let j = len - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        minHeapify(arr, 0, j);
    }
    return arr;
}

function minHeapify(arr, index, size) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let minIndex = index;
    // 找出最大的子节点
    if(left < size && arr[left] < arr[minIndex]) minIndex = left;
    if(right < size && arr[right] < arr[minIndex]) minIndex = right;

    if(minIndex !== index) {
        [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
        minHeapify(arr, minIndex, size);
    }
}
  
const arr = [5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4];
const res = heapSort(arr);
const topKRes = topK(arr, 3);
console.log(res);
console.log(topKRes);
