var salario = 2000.00;
var aumento = 0.15;
var inflacao = 0.07

var novoSalario = salario + (aumento * salario);
var novoSalarioInflacao = novoSalario - (inflacao * novoSalario);

console.log (novoSalario);
console.log (novoSalarioInflacao);

var strnovoSalario = `O novo salario é:\n R$\t ${novoSalario}`;
var strnovoSalarioInflacao = `O novo salario aplicada inflacao é:\n R$ ${novoSalarioInflacao}`;

console.log (strnovoSalario);
console.log (strnovoSalarioInflacao);