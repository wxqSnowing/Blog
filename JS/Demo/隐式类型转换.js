console.log([] == false); //true
console.log(!![]); //true
console.log(!!{}); //true
console.log([1] == [1]); //false
console.log([1] === [1]); //false
console.log("" == false); //true
//null和undefined都是和谁都不想等
console.log('-------');
console.log(null == true); //false
console.log(null == false); //false
console.log(undefined == true); //false
console.log(undefined == false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log('-------');
console.log(0 == false); //true
console.log(NaN == false); //false