function deepCopy(obj, res = {}){
    for(let key in obj ){
        if(typeof obj[key] === 'object'){
            res[key] = (obj[key].constructor === Array)? [] : {};
            deepCopy(obj[key], res[key]);
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}

const a = {'name': 123};

const b = {'age': 30, 'obj' : {
    'test':123
}};

const c = deepCopy(a, b);
console.log(c.toString());