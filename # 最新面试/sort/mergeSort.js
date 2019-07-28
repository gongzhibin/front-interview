function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    function merge(left, right) {
        let res = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                res.push(left.shift());
            } else {
                res.push(right.shift());
            }
        }
        if (left.length) {
            res = [...res, ...left];
        }
        if (right.length) {
            res = [...res, ...right];
        }
        return res;
    }
    return merge(mergeSort(left), mergeSort(right));
}
const sort = mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(sort);