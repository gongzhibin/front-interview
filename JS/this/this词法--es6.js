this.id = 'gloabl';
function foo() {
    // 返回一个箭头函数
    return (a) => {
        // 这里的 `this` 是词法上从 `foo()` 采用的
        console.log( this.a );
    };
}
var obj1 = {
    a: 2
};
var obj2 = {
    a: 3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 不是3!
//一个箭头函数的词法绑定是不能被覆盖的（就连new也不行！）。


function foo1() {
    setTimeout(() => {
        console.log('id:', this.id); // 42
    }, 100);
    setTimeout(function() {
        console.log('id:', this.id); // 21
    }, 100);
}

foo1.call({ id: 42 }); // id: 42


// 所有的箭头函数都没有自己的this，都指向外围最近一层非箭头函数
// “箭头函数”的this，总是指向定义生效时所在的对象，而不是运行时所在的对象。（总是指向所在函数运行时的this）
// this对象的指向是可变的，但是在箭头函数中，它是固定的。
function foo2() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
  
var f = foo2.call({id: 1});
  
var t1 = f.call({id: 2})()();
var t2 = f().call({id: 3})();
var t3 = f()().call({id: 4});


// 箭头函数本身没法修改this，所以对this访问永远是它继承外部上下的this，按照babel的实现来说，在箭头函数内部没有this引用的时候，默认编译成这样
// var f = function(v) {
//   return v;
// };

// 但是如果箭头函数内部使用了this，就成了
// function test() {
//   var _this = this;

//   var f = function f(v) {
//     return _this.a;
//   };
// }

// 这个实现是符合标准的，全程没有绑定这回事。
// “箭头函数”的this，总是指向定义时所在的对象，而不是运行时所在的对象。
// 这句话完全正确，而且语言是通过忽略对箭头函数的所有绑定操作来实现的，而不是简单的返回一个绑定this的闭包。

function Foo3() {
    this.id = 'foo3';
}

Foo3.prototype.show = () => {
    console.log('foo3: ', this.id);
};
const foo3 = new Foo3();
foo3.show();




const foo4 =  {
    id: 'foo4',
    show: () => {
        console.log('foo4', this.id);
    }
};
// foo4.show = () => {
//     console.log('foo4', this.id);
// };
foo4.show();