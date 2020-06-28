//1234*15
function bigMulti(numStr1, numStr2) {
    var longNum = numStr1.length >= numStr2.length ? numStr1 : numStr2;
    var shorNum = numStr1.length < numStr2.length ? numStr1 : numStr2;
    let res = [];
    let flag = 0;
    let maxLength = 0;
    for (let i = shorNum.length - 1; i >= 0; i--) {
        let temp = [];
        for (let j = longNum.length - 1; j >= 0; j--) {
            let val = longNum[j] * shorNum[i] || 0;
            temp.unshift(val)
        }
        for (let j = 0; j < flag; j++) {
            temp.push(0);
        }
        res.push(temp.reverse());
        maxLength = temp.length > maxLength ? temp.length : maxLength;
        flag++;
    }
    let index = 0;
    let final = [];
    for (let i = 0; i < maxLength; i++) {
        let multiRes = index;
        for (let j = 0; j < res.length; j++) {
            let val = res[j][i] || 0;
            multiRes += val;
        }
        index = Math.floor(multiRes / 10);
        let value = Math.ceil(multiRes % 10);
        final.push(Math.ceil(multiRes % 10));
    }
    if (index > 0) {
        final.push(index);
    }
    return final.reverse().join('');
}

console.log(bigMulti('99', '99'));