(function() {
    console.log(1);
    setTimeout(function(){
        console.log(2);
    },100);
    setTimeout(function(){
        console.log(3);
    },1);
    console.log(4);
    setTimeout(function(){
        console.log(5);
    },0)
    console.log(6);
 })()