function shellSort(arr) {
    let gap = Math.floor(arr.length / 2);
    for(gap; gap > 0; gap = Math.floor(gap / 2)){
        for(let i = gap; i < arr.length; i++) {
            let j = i;
            while(j - gap >= 0 && arr[j] < arr[j - gap]){
                [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
                j -= gap;
            }
        }
    };
    return arr;
}
const sort = shellSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(sort);