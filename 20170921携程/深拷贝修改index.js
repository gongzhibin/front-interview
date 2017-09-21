function deepCopy(p, c) {
    if(JSON.stringify(p)=='{}'){
        return p;
    }
    var c = c || {};
    for (var i in p) {
        if (i.charAt(0) >= 'a' && i.charAt(0) <= 'z') {
            index = i.charAt(0).toUpperCase() + i.slice(1);
            if (typeof p[i] === 'object') {
                c[index] = (p[i].constructor === Array) ? [] : {};
                deepCopy(p[i], c[index]);
            } else {
                c[index] = p[i];
            }
        } else {
            if (typeof p[i] === 'object') {
                c[i] = (p[i].constructor === Array) ? [] : {};
                deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }

    }
    return c;
}
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input){
    var obj = JSON.parse(input);
    var res = deepCopy(obj);
    var result = JSON.stringify(res);
    console.log(result);
}).on('close', function() {

});
