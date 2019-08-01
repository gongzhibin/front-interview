var line;
var flag = 0;
var n = 0;
var x = [];
var y = [];
var answer = [];
while (line = read_line()) {
    if (flag == 0) {
        n = parseInt(line);
        for (var i = 0; i < n; i++) {
            answer[i] = [];
            for (var j = 0; j < n; j++) {
                answer[i][j] = 0;
            }
        }
    } else if (n == flag) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (x[j] > x[i] && y[j] > y[i]) {
                    break;
                }
                if (j == n - 1) {
                    arr[x[i]][x[j]] = 1;
                }
            }
        }
        for(var i=0;i<n;j++)
            flag = 0;
        x = [];
        y = [];
        answer = [];
    } else {
        temp = line.split(' ');
        x[flag] = parseInt(temp[0]);
        y[flag] = parseInt(temp[1]);
        flag++;
    }
}

//注意，如果一行超过1024个字符，会被强制分行的
//，因此如果题目明确说明该行超过1024字符，请自行拼接（当然，我们尽量不出这种题目）。
/*
var next = '';
var line;
while(line = read_line()){
    next += line;
}
next中就是超过1024字符的该行字符串。
*/