// 策略模式定义: 定义一系列方法，把他们一个个封装起来，并且使他们可以相互替换

/**
 * 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句
 * 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的strategy中，使得他们易于切换、易于理解、易于扩展
 * 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作
 * 在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案
 */


var strategies = {
    "S": function ( salary ) {
        return salary*4;
    },
    "A": function ( salary ) {
        return salary*3;
    },
    "B": function ( salary ) {
        return salary*2;
    }
}

var calculateBonus = function(level, salary) {
    return strategies[level](salary);
}

console.log(calculateBonus('S', 3000))

// 用策略模式重构表单校验

var strategies = {
    inNonEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg
        }
    },
    isMobile: function(value, errorMsg) {
        if (!/(^1[3|5])/.test(value)) {
            return errorMsg
        }
    }
}

var Validator = function() {
    this.cache = [];
}

Validator.prototype.add = function(dom, rule, errorMsg) {
    var ary = rule.split(':')
}

var validateFunc = function() {
    var validator = new Validator()
    validator.add(registerForm.userName)
}