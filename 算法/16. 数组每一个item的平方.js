function square1(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

function square2(arr) {
    return arr.map(item => item * item)
}


console.log(square1([1, 2, 3]));
console.log(square2([1, 2, 3]));