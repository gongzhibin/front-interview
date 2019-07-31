function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i] < arr[j]) {
                arr.splice(i, 1, arr[i]);
                i++;
            }
            break;
        }
    }
    return arr;
}

const sort = insertionSort([5, 4, 3, 2, 1]);
console.log(sort);