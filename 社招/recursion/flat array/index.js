Array.prototype.flat = function() {
    let flatArr = [];
    this.forEach((item) => {
        if (Array.isArray(item)) {
            flatArr = [...flatArr, ...item.flat()];
        } else {
            flatArr.push(item);
        }

    });
    return flatArr;
}

const arr = [1, 2, 3, [1, 2, [1, 2]]];
const flatArr = arr.flat();
console.log(flatArr);
