 
// 父: i
// 左子: 2i + 1
// 右子: 2i + 2
// 父相对于子Math.floor((j - 1) / 2)

// 最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
// 创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆
// 堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算

function heapSort(arr) {
    const len = arr.length;
    if(len <= 1) return arr;
    // 创建最大堆， 从第一个非叶子节点下到上，从右到左
    for(let i = Math.floor(len / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, i, len);
    }
    // 排序，每一次循环找出一个当前最大值，数组长度减1
    for(let j = len - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        maxHeapify(arr, 0, j);
    }
    return arr;
}

function maxHeapify(arr, index, size) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let maxIndex = index;
    // 找出最大的子节点
    if(left < size && arr[left] > arr[maxIndex]) maxIndex = left;
    if(right < size && arr[right] > arr[maxIndex]) maxIndex = right;

    if(maxIndex !== index) {
        [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]];
        maxHeapify(arr, maxIndex, size);
    }
}
  
const arr = [5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4];
const res = heapSort(arr);
console.log(res);
