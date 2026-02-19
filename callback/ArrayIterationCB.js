function forEachElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let numbers = [1, 2, 3, 4];

forEachElement(numbers, function(element) {
    console.log("Element:", element);
});
