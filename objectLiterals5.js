var foo = {
    bar: 123,
    bas: [{
        qux: 1
    },
    {
        qux: 2
  },
   {
       qux: 3
     }]
 };

console.log(foo.bar);
console.log(foo.bas[1].qux);
document.getElementById('txt').value = foo.bas[0].qux;
