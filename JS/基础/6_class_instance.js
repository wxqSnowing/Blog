// function Mobile(opt) {
//     this.color = opt.color;
//     this.brand = opt.brand;
//     this.camera = function() {
//         console.log('take a camera----');
//         return 2;
//     };
// }

// Mobile.prototype = {
//     system: 'iOS',
//     rom: '64G',
//     ram: '8G',
//     call: function() {
//         console.log('calling ----');
//         return 1;
//     }
// }

// var m = new Mobile({
//     color: 'red',
//     brand: 'iphone'
// })

// m.call();
// m.rom = '128G';
// // console.log(m.rom);
// // console.log(Mobile.prototype.rom);
// m.camera();
// delete m.color;
// delete m.camera;
// delete m.call;
// console.log(m);
// // console.log(m.camera()); //报错，因为被删除了
// console.log(m.call());
// console.log(Mobile.prototype.call());

function test() {
    a = 1;
}
test();
console.log(a);