function find(length, arr, sum) {
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if ((arr[i] + arr[j]) === sum) {
                console.log(arr[i], arr[j]);
                return;
            }
        }
    }
    return 'notfound'
}
find(5, [1, 3, 4, 6, 8], 10);