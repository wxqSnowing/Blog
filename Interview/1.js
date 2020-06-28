var promise = new Promise(function(resolve, regect) {
    setTimeout(function() { console.log('hello, world') }, 1000)
});

promise.then(() => {
    document.write('你好');
}).catch(() => {
    document.write('having a error');
})