function checkStack(input, stack, length) {
    var tempStack = [];
    if (tempStack[0] == stack[0]) {
        input.shift();
        tempStack.shift();
    }else{
        tempStack.push(input.shift());
    }
}