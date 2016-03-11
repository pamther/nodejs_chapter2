var foo = { bas: 123};
var bar = foo;
bar.bas = 456;
console.log(foo.bas);
document.getElementById('txt').value = foo.bas;
