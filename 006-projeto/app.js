var num1 = 10;
var num2 = 15;
var num3 = 5;
console.log(num2>num1)
console.log(num1>num3)
if (num2>num1 && num1>num3) {
    console.log(`o número ${num2} é maior que o ${num1} e o ${num1} é maior que o numero ${num3}`)
} else  {
    console.log(`o número ${num1} é menor que o ${num2}`)
}

if (num3>num1 || num2>num1) {
    console.log(`1 - ${num1} ${num2} ${num3} `)
} else {
    console.log(`2 - ${num1} ${num2} ${num3} `)  
}