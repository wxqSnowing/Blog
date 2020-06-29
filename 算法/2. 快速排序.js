//快速排序的思想
//1. 从数列中取出一个数作为基数,并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集。
//2. 分区过程中，将比这个数大的全放在它右边，比它小的全放在左边；
//3. 再对左右区间重复上面的步骤，直到左右区间有且只有一个数；
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.ceil(arr.length / 2);
    let base = arr.splice(middle, 1)[0];
    var left = [];
    var right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([base], quickSort(right));
}

console.log(quickSort([9, 5, 6, 2, 4, 8, 0]));