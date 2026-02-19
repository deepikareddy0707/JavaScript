function processNumber(num, callback) {
    let result = num * 2;
    callback(result);
}

processNumber(5, function(output) {
    console.log("Doubled Number:", output);
});
