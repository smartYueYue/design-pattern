# 代理模式
## 代理模式是为一个对象提供一个代用品或者占位符，以便控制对它的访问
## 代理模式的关键是
当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做一些处理之后，再把请求交给本体对象。
## 代理的意义：
单一职责原则
## 单一职责原则： 
对一个类而言，应该仅有一个引起它变化的原因。如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可能会有多个。面向对象设计鼓励将行为分布到细粒度的对象之中，如果一个对象承担的职责过多，等于把这些职责耦合到了一起，这种耦合会导致脆弱和低内聚的设计。
## 代理和本体接口的一致性
### 好处
- 用户可以放心的请求代理，只关心是否能得到想要的结果
- 在任何使用本体的地方都可以替换成代理使用
## 虚拟代理合并http请求
多个请求合并成一个
## 虚拟代理在惰性加载中的应用
先存在缓存里 真正用的时候再加载执行
## 缓存代理
缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。
- 求乘积
```js
var mult = function () {
  var a = 1;
  for (var i = 0; i < arguments.length; i++) {
    a = a * arguments[i];
  }
  return a;
};
mult(2, 3);
mult(2, 3, 4);
```
- 加入缓存代理函数
```js
var proxyNult = (function(){
  var cache = {};
  return function() {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = mult.apply(this, arguments);
  }
})()
```
## 缓存代理用于ajax异步请求数据
## 用高阶函数动态创建代理
```js
// 计算乘积
var mult = function() {
  var a = 1;
  for (var i = 0; i < arguments.length; i++) {
    a = a * arguments[i];
  }
  return a;
}
// 计算加和
var plus = function() {
  var a = 0;
  for(var i = 0; i < arguments.length; i++) {
    a = a + arguments[i];
  }
  return a;
}
// 创建缓存代理的工厂
var createProxyFactory = function( fn ) {
  var cache = {};
  return function() {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = fn.apply(this, arguments);
  }
}
var proxyMult = createProxyFactory(mult);
proxyPlus = createProxyFactory(plus);

proxyMult(1, 2, 3, 4);
proxyPlus(1, 2, 3, 4);
```

## 其他代理模式
- 防火墙代理： 控制网络资源的访问，保护主机不让坏人接近
- 远程代理：为一个对象在不同的地址空间提供局部代表
- 保护代理：用于对象应该有不同访问权限的情况
- 智能引用代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个对象被引用的次数
- 写时复制代理：通常用于复制一个庞大对象的情况。写时复制代理延迟了复制的过程，当对象被真正修改时，才对它进行复制操作。写时复制代理是虚拟代理的一种变体，dll（操作系统中的动态链接库）是其典型运用场景