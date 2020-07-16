setTimeout(() => { console.log(0, '------', new Date().getTime()) }, 0)
console.log(1, '------', new Date().getTime());
var p = new Promise(function(resolve, reject) {
    console.log(2, '------', new Date().getTime());
    setTimeout(() => { console.log(3, '------', new Date().getTime()); }, 200);
})
var pre = new Date().getTime();
while (true) {
    if (new Date().getTime() - pre >= 500) {
        console.log(4, '------', new Date().getTime());
        break;
    }
}
console.log(5, '------', new Date().getTime());