var foo = 123;  //Global variable

if (true) {
    (function () {
        var foo = 456;
    })();
}

console.log(foo);
