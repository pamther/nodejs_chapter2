var foo ={ bas: 123};
var bar = { bas: foo.bas };
bar.bas = 456;
console.log(foo.bas);
document.getElementById('txt').value = foo.bas;
