//If Object.create isn't already defined, we just do the simple shim,
//without the second argument, since that's all we need here
var object_create = Object.create;
if (typeof object_create !== 'function') {
    object_create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

function deepCopy(obj) {
    if(obj == null || typeof(obj) !== 'object'){
        return obj;
    }
    //make sure the returned object has the same prototype as the original
    var ret = object_create(obj.constructor.prototype);
    for(var key in obj){
        ret[key] = deepCopy(obj[key]);
    }
    return ret;
}


// Function.prototype.clone = function() {
//     var that = this;
//     var temp = function temporary() { return that.apply(this, arguments); };
//     for(var key in this) {
//         if (this.hasOwnProperty(key)) {
//             temp[key] = this[key];
//         }
//     }
//     return temp;
// };

var obj = {
    add: function() {
        return 1;
    }
}

var newObj = deepCopy(obj);
console.log(newObj.add === obj.add)
