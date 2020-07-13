/*
1. let 和const不存在变量提升
2. let和const会形成暂时性死区
3. let和const存在块极作用域
4. let和const都不允许在同一个作用域内重复声明变量
5. tips: 在for循环中，条件声明和判断会有一个单独的作用域，在循环体内会有新的作用域,所以let声明的变量可以在条件中声明和循环体里面声明不会报错
*/
// console.log(i); //报错 i is not defined，因为let声明的变量不存在变量提升
console.log(j); //undefeined, 因为var声明的变量变量提升了，但是初始化不会提升
var a = [];
for (let i = 0; i < 5; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[3](); //3

var b = [];
for (var j = 0; j < 5; j++) {
    b[j] = function() {
        console.log(j);
    }
}
b[3](); //5

for (let i = 0; i < 5; i++) {
    // console.log(`------hhhhh${i}`); //报错 i is not defined，因为下面的let形成了暂时性死区
    // var i = 6; //报错，Identifier 'i' has already been declared 因为在循环条件里面是一个外层作用域，是let声明的，会变成一个暂时性死区
    let i = 6;
    console.log(`hhhhh${i}`); //这里会打印5次hhhhh6,在循环条件里面是一个外层作用域，在循环体里面是一个内层的作用域。在寻找变量i的值时候会直接找最近的i的值
}

for (var m = 0; m < 5; m++) {
    var m = 6;
    console.log(`mmmmm${m}`); //这里只打印一次mmmmm6
}

for (let i = 0; i < 5; i++) {
    const i = 5;
    // let i = 0;//报错 Identifier 'i' has already been declared,直接在const下面声明一个重复的变量
    // i = 6; //常量不允许修改
    console.log(`uuuuu${i}`);
    const a = [];
    a.push(1); //可以，因为对于引用类型，const保存的是一个指向对象的指针
    a[3] = 0;
    console.log(a); //[ 1, <2 empty items>, 0 ]
    // a = [1, 2]; //报错，因为相对于重新赋予了一个指针
}