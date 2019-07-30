function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);

    function search(arr, target, left, right) {
        if (left > right) {
            return -1;
        }
        const index = Math.floor((right + left) / 2);
        if (arr[index] < target) {
            return search(arr, target, index + 1, right);
        }
        if (arr[index] > target) {
            return search(arr, target, left, index - 1);
        }
        return index;
    }
}

const index = binarySearch([1, 3, 5, 7, 9, 11], 12);
console.log(index);