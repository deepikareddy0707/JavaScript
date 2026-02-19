function checkEven(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback(num);
    } else {
        oddCallback(num);
    }
}

// Example usage
checkEven(7,
    function(number) {
        console.log(number + " is Even");
    },
    function(number) {
        console.log(number + " is Odd");
    }
);
