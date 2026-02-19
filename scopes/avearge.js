function average(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

console.log("Average:", average([2, 5, 2]));     // 3
console.log("Average:", average([10, 20, 30]));
console.log("Average:", average([5, 15]));
