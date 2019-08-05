# commonjs 与 es6区别

1. es6 静态导入，编译时加载，优先解析，无法条件引入。commonjs运行时加载，可条件引入
2. es6为模块值的引用，commonjs为值的拷贝
3. es6: import语句：静态（当前标准）; import函数：动态，返回promise。可实现条件引入，动态引入（ES2020）
