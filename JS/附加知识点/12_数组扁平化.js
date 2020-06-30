//将数组扁平化，并把扁平化的结果进行去重，最后升序排列
var arr = [1, [2, 1, [3, 12, 4, 3, 6, 5], 6]];

function flatten1(arr) {
    return Array.prototype.toString.call(arr).split(',');
}

function flattern2(arr) {
    return arr.join(',').split(',')
}

function flattern3(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
            return res.concat(flatten1(arr[i]));
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

function flattern4(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flattern4(item) : item)
    }, [])
}

function dedup(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in res) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

function sort(arr) {
    return arr.sort((a, b) => { return a - b; })
}

let flattern_arr = flattern4(arr);
console.log(flattern_arr);

let duparr = dedup(flattern_arr);
console.log(duparr);

let sort_arr = sort(duparr);
console.log(sort_arr);













// console.log(test([1, 2, 3]));
// function test(arr) {
//     return arr.reduce((result, item) => { return result + item });
// }