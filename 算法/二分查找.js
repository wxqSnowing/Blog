//非递归实现
function binSearch(target, arr) {
    let low = 0,
        high = arr.length;
    while (low <= high) {
        var middle = Math.ceil((low + high) / 2);
        if (target == arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return 'Not Found';
}

console.log(binSearch(9, [0, 1, 3, 4, 5, 6, 7, 8, 9]));