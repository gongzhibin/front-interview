if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}


function foo() {
    console.log("name: " + this.name);
 }
 var obj = { name: "obj" },
     obj2 = { name: "obj2" },
     obj3 = { name: "obj3" };
 var fooOBJ = foo.softBind( obj );
 fooOBJ(); // name: obj
 obj2.foo = foo.softBind(obj);
 obj2.foo(); // name: obj2   <---- 看!!!
 fooOBJ.call( obj3 ); // name: obj3   <---- 看!
 setTimeout( obj2.foo, 10 ); // name: obj   <---- 退回到软绑定

//  它用一种逻辑将指定的函数包装起来，这个逻辑在函数调用时检查this，
//  如果它是global或undefined，就使用预先指定的默认值（obj），否则保持this不变。
//  它也提供了可选的柯里化行为（见先前的bind(..)讨论）