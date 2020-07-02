var products = [{
    name: 'iphone 7',
    price: 6188,
    num: 1
}, {
    name: 'iphone 8',
    price: 7188,
    num: 1
}, {
    name: 'iphone X',
    price: 9188,
    num: 1
}]
res = products.reduce((pre, cur, index, arr) => {
    return typeof(pre) === 'object' ? (pre.price * pre.num + cur.price * cur.num) : pre + (cur.price * cur.num);
})
console.log(res);
// console.log(6188 + 7188 + 9188);//22564

// console.log([1, 2, 3, 4].reduce((pre, cur) => {
//     console.log(pre);
//     return pre + cur;
// }));