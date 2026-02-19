function sayHello(name, callback) {
    setTimeout(function() {
        callback("Hello, " + name + "!");
    }, 1000);
}

sayHello("Deepika", function(message) {
    console.log(message);
});
