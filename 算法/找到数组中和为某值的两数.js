// 给出一个整数数组，请在数组中找出两个加起来等于目标值的数，
// 你给出的函数twoSum 需要返回这两个数字的下标（index1，index2），需要满足 index1 小于index2.。注意：下标是从1开始的
// 假设给出的数组中只存在唯一解
// 例如：
// 给出的数组为 {2, 7, 11, 15},目标值为9
// 输出 ndex1=1, index2=2

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
}