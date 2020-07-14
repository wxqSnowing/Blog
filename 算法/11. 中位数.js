// 有两个大小分别为m和n的有序数组A和B。请找出这两个数组的中位数。你需要给出时间复杂度在O(log (m+n))以内的算法。
function findMedianSortedArrays(A, B) {
    const midIndex = (A.length + B.length) / 2;
    const newArr = A.concat(B);
    newArr.sort((a, b) => a - b);
    if ((A.length + B.length) % 2) {
        return newArr[Math.ceil(midIndex) - 1]
    } else {
        return (newArr[midIndex - 1] + newArr[midIndex]) / 2
    }
}
console.log(findMedianSortedArrays([7, 8, 9], [1, 2, 3, 4, 5, 6]))