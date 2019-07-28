function quickSortSimple(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const left = [];
    const right = [];
    const primary = arr[arr.length - 1];
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < primary) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortSimple(left), primary, ...quickSortSimple(right)];
}

function quickSort(arr) {
    function recurse(arr, left, right) {
        if(left >= right) return;
        function findPointer(arr, left, right) {
            let pointer = left;
            let primary = arr[right];
            for(let i = left; i < right; i++) {
                if(arr[i] < primary) {
                    [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
                    pointer++;
                }
            }
            [arr[right], arr[pointer]] = [arr[pointer], arr[right]];
            return pointer;
        }
    
        let pointer = findPointer(arr, left, right);
        recurse(arr, left, pointer - 1);
        recurse(arr, pointer + 1, right);
        return arr;
    }
    return recurse(arr, 0, arr.length - 1);
}

const res = quickSortSimple([5, 4, 3, 2, 1]);
console.warn(res);