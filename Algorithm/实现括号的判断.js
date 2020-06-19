/**
 * 数组中的括号是否正确结束
 * 规则：'(': ')', '[': ']', '{': '}'
 * @param {arr} Array
 * @return Boolean
 */

function quotatioStack(arr) {
    let rule = { '(': ')', '[': ']', '{': '}' };
    var res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (rule[res[res.length - 1]] === arr[i]) {
            res.pop();
        } else {
            res.push(arr[i]);
        }
    }
    return res.length > 0 ? false : true;
}

//test
var arr = ['(', '[', ']', ')', '{', '}'];
arr = ['(', ']'];
var res = quotatioStack(arr);
console.log((res ? '正确结束' : '没有正确结束'));