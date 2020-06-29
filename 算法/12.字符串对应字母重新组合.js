// "abc def ghi"=>"adg beh cfi"
function convert(str) {
    var arr = str.split(' ');
    let res = [];
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxLength < arr[i].length) {
            maxLength = arr[i].length;
        }
    }
    for (let i = 0; i < maxLength; i++) {
        let temp = "";
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i]) {
                temp += arr[j][i];
            } else {
                temp += '';
            }
        }
        res.push(temp);
    }
    return res.join(" ");
}
console.log(convert("abcf defggg"));