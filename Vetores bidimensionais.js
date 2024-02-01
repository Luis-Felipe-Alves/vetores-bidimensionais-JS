//VETORES DE DUAS DIMENSÕES:

let carros = ['Corolla', 'Kwid', 'Onix', 'Civic'];
let anos = [2020, 2023, 2019, 2008];

let lista = [carros, anos];

//Agora podemos armazenar os vetores internos de "lista" em duas constantes:

// const carros2 = lista[0];
// const anos2 = lista[1];

const [carros2, anos2] = lista

console.log(carros2, anos2);
