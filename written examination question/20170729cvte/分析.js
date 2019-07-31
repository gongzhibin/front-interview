/**
 * Created by zxlg on 2017/7/29.
 */
var title = 'hello world'
var myClass = function () {

}
myClass.title = '你好！'
myClass.prototype.getTitle = function () {
    function doGetTitle()
    {
        return this.title;
    }
    return doGetTitle.call(this);
}

var obj = new myClass();

console.log(obj.getTitle());