const data = [
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
const maisDe30 = data.filter((item) => item.age > 30);
console.log(maisDe30);
//___________________________________________________________________________________________________

const moedaSalarial = data.map((item) => item.salary.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(moedaSalarial);
//___________________________________________________________________________________________________
const cadeSmith = data.filter((item) => item.name.includes("Smith"));
//.map((item => item.name));
console.log(cadeSmith);
//___________________________________________________________________________________________________
const currentDate: string = "12/03/2025"
const partes = currentDate.split("/");
const novaData = [partes[2], partes[0], partes[1]];
const formatoData = [novaData.join('-')];
console.log(formatoData);
//___________________________________________________________________________________________________