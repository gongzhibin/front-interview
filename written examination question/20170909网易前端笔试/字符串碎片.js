// import java.text.DecimalFormat;
// import java.util.*;

// public class Test {
// 	public static void main(String [] args) {
// 		Scanner sc = new Scanner(System.in 

// );
// 		String s = sc.nextLine();
// 		float result = count(s);
// 		DecimalFormat decimalFormat=new DecimalFormat(".00");
// 		String res = decimalFormat.format(result);
// 		System.out.println(res);
// 		sc.close();

// 	}

// 	public static float count(String s) {
// 		float result = 0;
// 		if(s.length() == 0)
// 			return result;
// 		int piece_count = 0;
// 		int len_count = 0;
// 		int len = 1;
// 		char last = s.charAt(0);
// 		for(int i = 1; i < s.length(); i++) {
// 			char temp = s.charAt(i);
// 			if(temp == last)
// 				len++;
// 			else {
// 				len_count += len;
// 				len = 1;
// 				last = temp;
// 				piece_count++;
// 			}
// 		}
// 		len_count += len;
// 		piece_count++;
// 		result = ((float) len_count ) / piece_count;
// 		return result;
// 	}
// }


var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var res = solution(input);
    console.log(res);
}).on('close', function () {

});

function solution(str) {
    var result = 0;
    if (str.length == 0) {
        return result;
    }
    var piece_count = 0;
    var len_count = 0;
    var last = str.charAt(0);
    var len_count = 0;
    var len = 1;
    for (var i = 1; i < str.length; i++) {
        var temp = str.charAt(i);
        if (temp == last) {
            len++;
        } else {
            len_count += len;
            len = 1;
            last = temp;
            piece_count++;
        }
    }
    len_count += len;
    piece_count++;
    result = (len_count / piece_count).toFixed(2);
    return result;
}