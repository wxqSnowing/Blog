var a = [1, 2, 3, 4, 5, 2, 3, 4];
var b = Array.from(a);
console.log(b);
var c = Array(10);
console.log(c);
var d = Array(1, 3, 5);
console.log(d);
console.log(Array.of(10, 20));

//数组去重
var a = [1, 2, 3, 2, 1, 3, 3];
console.log(Array.from(new Set(a)));
//数组并集
var b = [4, 5, 6, 1];
console.log(Array.from(new Set([...a, ...b])));
//数组交集
// console.log(new Set(b).has(4));
var d = new Set([...a].filter(v => new Set(b).has(v)));
console.log(Array.from(d));
//数组差集
var e = new Set([...a].filter(v => !new Set(b).has(v)));
console.log(Array.from(e));

var a = new Set([1, 2, 3, 'a']);
console.log(a.keys());
console.log(a.values());

a.add('b');
console.log(a, '----add');
console.log(a.has('b'), '-----has');
a.delete('b');
console.log(a, '----delete');
console.log(a.has('b'), '-----has');
a.clear();
console.log(a, '------clear');


var e = new Map();
e.set('name', 'wxq');
e.set('age', 10);
console.log(e.keys());
console.log(e.values());
console.log(e.entries());
for (let [k, v] of e) {
    console.log(k, '-----', v);
}
console.log(e.get('name'));

const map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
console.log(map0);
console.log(map0.keys());
console.log(map0.values());
console.log(map0.entries());

const map1 = new Set([...map0].filter(([k, v]) => k < 3));
console.log(map1);

const map2 = new Set([...map0].map(([k, v]) => v + 'hello'));
console.log(map2);


var a = [1, 2, 3];
console.log(a.map((item) => item * item));
console.log([...a] == a);