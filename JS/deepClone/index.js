function deepClone(source) {
    const map = new WeakMap();

    function clone(source) {
        let res;
        const exist = map.get(source);
        if(exist) return exist;

        if (typeof source === 'object' || typeof source === 'function') {
            const Ctor = source.constructor;
            switch (Ctor) {
            case RegExp:
                res = new Ctor(source);
                break;
            case Date:
                res = new Ctor(source.getTime());
                break;
            case Function:
                // https://stackoverflow.com/questions/1833588/javascript-clone-a-function
                // res = new Ctor('return ' + source.toString());
                res = source.bind(null); // apply, bind
                break;
            default:
                res = new Ctor();
            }
            map.set(source, res);

            for (let key in source) {
                if (typeof source[key] === 'object' || typeof source[key] === 'function') {
                    res[key] = clone(source[key]);
                } else {
                    res[key] = source[key];
                }
            }
        } else {
            res = source;
        }
        return res;
    }
    return clone(source);
}

const obj = {
    str: 'zxlg',
    circle: {},
    arr: [1, 2, 3],
    add: (a, b) => {
        return a + b;
    },
    reg: /asd/i,
    time: new Date()
};
obj.circle.ctor = obj;

const newObj = deepClone(obj);
console.log(typeof obj.add, newObj.add === obj.add);
