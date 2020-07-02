var a = [10, 11, 12, 12];
for (let key in a) {
    console.log(key);
}

for (let item of a) {
    console.log(item);
}

var person = { name: 'wxq' };
//for in就是通过 Object.keys(person)获取key来遍历
for (let key in person) {
    console.log(key);
}

var person1 = {};
Object.defineProperty(person1, 'name', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'wxq'
});
console.log(person1.name);
delete person1.name;
console.log(person1.name);