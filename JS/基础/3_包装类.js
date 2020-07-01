// //Boolean
// console.log(true, '----', typeof(true)); //true '----' 'boolean'
// console.log(false, '----', typeof(false)); //false '----' 'boolean'
// console.log(new Boolean(true), '-------', typeof(new Boolean(true))); //[Boolean: true] '-------' 'object'
// console.log(new Boolean(false), '-------', typeof(new Boolean(false))); //[Boolean: false] '-------' 'object'

// if (false) {
//     console.log('不会执行'); //没有打印
// }
// if (new Boolean(false)) {
//     console.log('使用包装类Boolean(flase)的逻辑判断为真'); //打印了，建议不要使用包装类来创建布尔值
// }

//Number


//String
// 字符串的slice，substring, substr区分
var str = "abcdef";
console.log(str.slice(1, str.length)); //bcdef
console.log(str.substring(1, str.length)); //bcdef
console.log(str.slice(1, 1)); //输出为空字符串，因为slice的参数第一个是起点索引位置，第二个结束索引之前
console.log(str.substring(1, 1)); //输出为空字符串，因为slice的参数第一个是起点索引位置，第二个结束索引之前
console.log(str.substr(1, 1)); //b,因为substr的第一个参数是索引位置，第二个是字符串的长度