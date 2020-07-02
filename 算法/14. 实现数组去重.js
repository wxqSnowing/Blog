//数组去重：
//1-----简单的：都是一样的类型, 没有嵌套数组
function dedup(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) !== -1) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(dedup([1, 1, 2, 3, 4, 'a', 'a']));

//2-----数组中又有数组的
//方法一: 
//[1,2]和[1,2]是两个不同的数组
console.log(Array.from(new Set([1, 2, 3, 4, [1, 2],
    [1, 2]
]))); //[ 1, 2, 3, 4, [ 1, 2 ], [ 1, 2 ] ]

//a和a是同一个数组
var a = [3, 4];
console.log(Array.from(new Set([1, 2, 3, 4, [1, 2],
    [1, 2],
    [3, 4], a, a
]))); //[ 1, 2, 3, 4, [ 1, 2 ], [ 1, 2 ], [ 3, 4 ] ]

//方法二:使用key来保存就可以不用递归来实现多层嵌套了，因为key会转换成唯一的字符串
function uniqF(arr) {
    var dict = {};
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in dict) {
            continue;
        } else {
            dict[arr[i]] = arr[i];
        }
    }
    for (let key in dict) {
        res.push(dict[key]);
    }
    return res;
}

var b = ['a', 'b'];
var arr = [b, b, 1, 2, 3, 4, 4, 3, 2, 0, [0, 1],
    [3, 4],
    [0, 1], null, null, {}, {},
    undefined, undefined, { name: 'wxq' }, { name: 'wxq' }
];
var res = uniqF(arr);
console.log(res);