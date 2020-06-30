//数组全排列
// let arr = [5, 3, 7, 1];
let arr = [1, 2, 3];

function permute(arr) {
    var res = [],
        usedChars = [];

    let f = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            let first = arr.splice(i, 1)[0];
            usedChars.push(first);
            if (arr.length == 0) {
                console.log('wuxueqin', usedChars.slice());
                res.push(usedChars.slice());
            }
            f(arr);
            arr.splice(i, 0, first);
            usedChars.pop();
        }
        return res;
    }

    return f(arr);
}

console.log(permute([1, 2, 3]));