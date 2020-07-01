// console.log(new Date()); //2020-07-01T03:02:34.709Z
// console.log(Date.parse("May 25 2020")); //1590336000000
// console.log(new Date(Date.parse("May 25 2020"))); //2020-05-24T16:00:00.000Z
// console.log(Date.UTC(2020, 0, 1, 1, 30, 12)); //1577842212000
// console.log(new Date(Date.UTC(2020, 0, 1, 1, 30, 12))); //2020-01-01T01:30:12.000Z
// console.log(Date.now()); //1593572695002
// console.log(new Date(Date.now()).getTime()); //1593572695003
// console.log(new Date().getTime()); //1593572695003
// console.log(new Date().toString()); //Wed Jul 01 2020 11:06:00 GMT+0800 (China Standard Time)
// console.log(Date.now(), '-------', new Date().valueOf(), '-------', new Date()); //1593572815212 '-------' 1593572815212 '-------' 2020-07-01T03:06:55.212Z

var date = new Date();
console.log(date.toString()); //Wed Jul 01 2020 11:12:40 GMT+0800 (China Standard Time)
console.log(date.getTime()); //1593573160650
console.log(date.getFullYear()); //2020
console.log(date.getMonth()); //6, 月份是从0开始
console.log(date.getUTCMonth()); //6, 月份是从0开始
console.log(date.getDate()); //1
console.log(date.getHours()); //11
console.log(date.getMinutes()); //12
console.log(date.getSeconds()); //40
console.log(date.getMilliseconds()); //650