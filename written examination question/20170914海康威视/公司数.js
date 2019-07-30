function solution(str) {
    var arr = str.split(';');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(',');
    }
    if (arr.length < 3 || arr[0][0] != '1' || arr[0][2] != '0') {
        return 'incorrect data';
    }
    var answer= [];
    for(var i=0;i<arr.length;i++){
        answer[i] = [];
    }

    for (var i = 0; i < arr.length; i++) {
        var parentID = parseInt(arr[i][2]);
        var ID = parseInt(arr[i][0]);
        var value = arr[i][1];
        if(!answer[parentID][ID]){
            answer[parentID][ID]=[];
            answer[parentID][ID] = value;
        }else{
            answer[parentID][ID] = value;
        }
    }
}
for(var i=0;i<answer.length;i++){
    for(var j=i+1;j<answer[i].length;i++){
        
    }
}

var a = solution('1,A,0;2,B,1;3,C,1');