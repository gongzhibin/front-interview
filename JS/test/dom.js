var a = documment.getElementById();
var arr = [];
for(var i =0;i<a.length;i++){
    arr[i] = a.childNodes[i];
}
arr.reverse();
a.innerHTML = null;
for(var i=0;i<arr.length;i++){
    a.appendChild(arr[i]);
}
