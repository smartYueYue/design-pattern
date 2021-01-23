// 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点

// 1.使用命名空间 - 全局变量易造成命名空间污染
// 对象字面量
var namespace = {
  a: function(){},
  b: function(){},
}

// 2.使用闭包封装私有变量
var user = (function() {
  var _name = 'sven',
      _age = 29;
  return {
    getUserInfo: function() {
      return _name + '-' + _age;
    }
  }
})()


// 通用的惰性单例

var obj;
if (!obj) {
  obj = 'xxx'
}