// 请将数组
//   [[1,2,4],[1,1,2,1],[1,2,3],[1,3,4],[1,3,2]] 
// 快速排序成  
// [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,1,2,1]]

function mySort(arr) {
    var temp = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].length;
        if (key in temp) {
            temp[key].push(arr[i]);
        } else {
            temp[key] = [];
            temp[key].push(arr[i]);
        }
    }
    let res = [];
    for (let i in temp) {
        res.push.apply(res, temp[i].sort());
    }
    return res;
}

console.log(JSON.stringify(mySort([
    [1, 2, 4],
    [1, 1, 2, 1],
    [1, 2, 3],
    [1, 3, 4],
    [1, 3, 2]
])));

//var list = [{age: 1}, {age:13}, {age:8}]
// 按照 age的值 将list从大到小排序
function sort2(arr) {
    return arr.sort((a, b) => {
        return b.age - a.age;
    })
}
console.log(JSON.stringify(sort2([{ age: 1 }, { age: 13 }, { age: 8 }])));