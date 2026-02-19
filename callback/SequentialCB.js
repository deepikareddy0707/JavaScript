function performTasks(num, addCallback, multiplyCallback) {
    let afterAdd = addCallback(num);
    let finalResult = multiplyCallback(afterAdd);
    console.log("Final Result:", finalResult);
}

// Example usage
performTasks(
    10,
    function(number) {
        return number + 5;
    },
    function(number) {
        return number * 2;
    }
);
