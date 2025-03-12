var data = [
    {
        id: 1,
        name: 'Alice Johnson',
        age: 28,
        salary: 1000.50
    },
    {
        id: 2,
        name: 'Bob Smith',
        age: 34,
        salary: 2150.98
    },
    {
        id: 3,
        name: 'Charlie Smith',
        age: 22,
        salary: 5000.00
    }
];
// ___________________________________________________________________________________________________
var maisDe30 = data.filter(function (item) { return item.age > 30; });
console.log(maisDe30);
//___________________________________________________________________________________________________
var moedaSalarial = data.map(function (item) { return item.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); });
console.log(moedaSalarial);
//___________________________________________________________________________________________________
var cadeSmith = data.filter(function (item) { return item.name.includes("Smith"); });
//.map((item => item.name));
console.log(cadeSmith);
//___________________________________________________________________________________________________
var currentDate = "12/03/2025";
var partes = currentDate.split("/");
var novaData = [partes[2], partes[0], partes[1]];
var formatoData = [novaData.join('-')];
console.log(formatoData);
//___________________________________________________________________________________________________
