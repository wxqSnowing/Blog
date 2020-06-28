// 计算一个字符串的字节数
//方法1
function getBytes1(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        var pos = str.charCodeAt(i);
        if (pos <= 255) {
            res++;
        } else {
            res += 2;
        }
    }
    return res;
}
console.log(getBytes1('wxq123你好'));

//方法2
function getBytes2(str) {
    let res = str.length;
    for (let i = 0; i < str.length; i++) {
        var pos = str.charCodeAt(i);
        if (pos > 255) {
            res++;
        }
    }
    return res;
}

console.log(getBytes2('wxq123你好'));