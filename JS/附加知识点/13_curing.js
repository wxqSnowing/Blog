// function add(a, b) {
//     return a + b
// }

// console.log(add(1, 2));

function curing(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            }
        }
    }
}

// console.log(curing(1)(2)(3)(4));

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // console.log('----', _args);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        // console.log('----', _args);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function() {
        console.log(_args, 'wuxueqin');
        return _args.reduce(function(a, b) {
            return a + b;
        });
    }
    return _adder;
}
console.log(add(1)(2)(3)().toString());
console.log(add(1, 2, 3)(4)().toString());
console.log(add(1)(2)(3)(4)(5)().toString());