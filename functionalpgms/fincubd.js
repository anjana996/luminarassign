let f=(num)=>num**3;
console.log(f(3))
var arr=[10,11,12,13,14]
var sq=arr.map(num=>num**2);
console.log(sq);
var even=arr.filter(num=>num%2==0);
console.log(even)
var max=arr.reduce((num1,num2)=> num1>num2?num1:num2);
console.log(max)

var sorted=arr.sort((num1,num2)=>num1-num2)
console.log(sorted)