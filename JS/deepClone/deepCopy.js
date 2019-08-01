function deepCopy(obj,res){
    var res = res || {};
    for(var i in obj ){
        if(typeof obj[i] === 'Object'){
            res[i] = (obj[i].constructor === Array)? [] : {};
            deepCopy(obj[i],res[i]);
        }else{
            res[i] = obj[i];
        }
    }
    return res;
}

var a = {'name':123};

var b = {'age':30,'obj':{
    'test':123
}};

c = deepCopy(a,b);
console.log(c.toString());