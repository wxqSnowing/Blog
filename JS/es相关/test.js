var p = new Promise((resolve, reject) => {
    console.log('ppp');
    setTimeout(() => {
        console.log('_______');
        resolve('666');
    }, 1000);
});
console.log('oooo');
p.then((data) => {
    return data + '!!!!!';
}).then((success) => {
    console.log('final', success)
})