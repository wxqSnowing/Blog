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

var arr = [1, 2, 3, 4, 4, 3, 2, 0, [0, 1],
    [0, 1], null, null, {}, {},
    undefined, undefined, { name: 'wxq' }, { name: 'wxq' }
];
var res = uniqF(arr);
console.log(res);