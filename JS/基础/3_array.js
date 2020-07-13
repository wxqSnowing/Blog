// //删除方法: 起点位置，删除的项数
// var arr1 = [1, 2, 3, 4, 'a'];
// arr1.splice(1, 3);
// console.log(arr1); //[ 1, 'a' ]
// //插入方法: 起点位置, 0, 待插入项1, 待插入项2, 待插入项3...
// var arr2 = [1, 2, 3, 4, 'a'];
// arr1.splice(1, 0, 'b', 'c', [1, 1]);
// console.log(arr1); //[ 1, 'b', 'c', [ 1, 1 ], 'a' ]
// //替换方法: 被替换的位置, 1, 需要替换成的值1, 继续追加值2
// var arr3 = [1, 2, 3, 4, 'a'];
// arr3.splice(2, 1, 'w', 'o');
// console.log(arr3); //[ 1, 2, 'w', 'o', 4, 'a' ]
// var arr4 = [1, 2, 3, 4, 'a'];
// console.log(arr4.toString()); //1,2,3,4,a
// console.log(arr4.valueOf()); //[ 1, 2, 3, 4, 'a' ]

// var arr5 = [1, 2, 3, 4, 'a'];
// arr5.forEach(item => {
//     item += 1;
//     console.log(item); //打印+1后的值
// })
// console.log(arr5); //[ 1, 2, 3, 4, 'a' ]

// var newArr = arr5.filter((item, index) => {
//     // console.log(index, 'index'); //打印索引值
//     return typeof(item) == 'number';
// });
// console.log(newArr); //[ 1, 2, 3, 4 ]
// console.log(arr5); //[ 1, 2, 3, 4, 'a' ]

// var newArr1 = arr5.map((item, index) => {
//     return `index:${index},map:${item}`;
// })
// console.log(newArr1); //[ 'index:0,map:1','index:1,map:2','index:2,map:3','index:3,map:4','index:4,map:a' ]

// var everyArr = arr5.every((item, index, arr) => { return index < arr.length })
// console.log(everyArr); //true

// var everyArr = arr5.every((item, index, arr) => { return (index + 1) < arr.length })
// console.log(everyArr); //false

// var someArray = arr5.some((item, index, arr) => { return (index + 1) < arr.length })
// console.log(someArray); //true

// var arr6 = [1, 2, 3, 4];
// var reduceArr = arr6.reduce(function(pre, cur, index, arr) {
//     return pre * cur;
// });
// console.log(reduceArr); //24
// var reduceArr1 = arr6.reduce(function(pre, cur, index, arr) {
//     return pre + cur;
// });
// console.log(reduceArr1); //10