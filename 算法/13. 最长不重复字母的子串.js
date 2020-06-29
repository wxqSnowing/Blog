// 给定一个字符串，找出最长的不具有重复字符的子串的长度。
// 例如，“abcabcbb”不具有重复字符的最长子串是“abc”，长度为3。对于“bbbbb”，最长的不具有重复字符的子串是“b”，长度为1。

function lengthOfLongestSubstring(s) {
    var max = [];
    let temp = [];
    for (let m = 0; m < s.length; m++) {
        let flag = false;
        let indexMaxflag = 0;
        for (let i = m; i < s.length; i++) {
            indexMaxflag = i;
            if (!temp.includes(s[i])) {
                temp.push(s[i]);
            } else {
                if (max.length < temp.length) {
                    max = temp.join('');
                }
                temp = [];
                flag = true;
            }
            if (flag) {
                break;
            }
        }
        if (indexMaxflag === s.length) {
            max = temp.join('');
            break;
        }
    }
    return max.length;
}

var res = lengthOfLongestSubstring('wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco');
console.log(res);
console.log(res.length);