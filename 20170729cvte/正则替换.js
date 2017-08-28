/**
 * Created by zxlg on 2017/7/29.
 */
var template = function(str){
    var reg = /<%=(\w+)%>/;
    var resultArr = reg.exec(str);
    return function(obj){
        return str.replace(reg,function(match,p1,offset,string){
            console.log(match);
            console.log(p1);
            console.log(offset);
            console.log(string);
            //替换match
            return obj[p1];
        });
    }
}
var complied = template('hello <%=user%>');
var str1 = complied({'user': 'zxlg'});
console.log(str1);