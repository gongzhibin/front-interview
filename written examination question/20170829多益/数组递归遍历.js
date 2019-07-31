let value = [];
function getvalue(arr) {
    for (let i = 0; i < arr.length; i++) {
        // if (Array.isArray(arr[i])){
        if (arr[i] instanceof Array) {
            getvalue(arr[i]);
        } else {
            value.push(arr[i]);
        }
    }

}
let meta = [1, [2, 3]];
getvalue(meta);
console.log(value);
