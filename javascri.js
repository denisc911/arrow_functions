// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:
// function greetings() {
//   return "Hola";
// }
const saludos = () => {  return "Hola";};
console.log(saludos())
  
// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;

// }
let a = 2;
let b = 4;
const division = (a, b) => a / b;
console.log(division(a, b));


// Convierte la siguiente función en una función flecha:
// function myName(name) {
//     return `Mi nombre es ${name}`;
//   }
const name = 'nombre';
const myName = (name) => `Mi nombre es ${name}`;
console.log(myName(name));

// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();

const test2 = () => { 
    console.log("Función test 2 ejecutada.");
  };
  console.log(test2);
  
  const test1 = (callback) => { 
    callback();
  };
  test1(test2); // 
  

// \\  . Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 

let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', age: 10 },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.
// Filtrar personas mayores de 25 años usando forEach
const mayorDe25 = [];
people.forEach(person => {
    if (person.age > 25) {
        mayorDe25.push(person);
    }
});
console.log("Personas mayores de 25 años:", mayorDe25);

// Crea un array con la gente que empieza por J.
// Filtrar personas cuyos nombres comienzan con "J" usando forEach
const empiezaConJ = [];
people.forEach(person => {
    if (person.name.startsWith('J')) {
        empiezaConJ.push(person);
    }


});
console.log("Personas cuyos nombres empiezan con J:", empiezaConJ);
// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 
// Crear un array con la gente mayor de 25 años
const mayorDe25 = people.filter(people => people.edad > 25);
console.log('Mayor de 25 años:', mayorDe25);

// Crear un array con la gente que empieza por J
const nombresConJ = people.filter(people => people.nombre.startsWith('J'));
console.log('Nombres que empieza por J:', nombresConJ);



// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
// Array de números
const numbers = [4, 5, 6, 7, 8, 9, 10];

// Crear un array con cada número elevado a sí mismo
const elevadoASiMismo = numbers.map(num => Math.pow(num, num));
console.log('Números elevados a sí mismos:', elevadoASiMismo);


// 4) FILTER 
// Crea un segundo array que devuelva los impares
//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numbers.filter(number => number % 2 !== 0);

console.log(impares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ]
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */
         const vegan = foodList
         .filter(food => food.isVeggie)
         .map(food => `Que rico ${food.name} me voy a comer!`);
       
       console.log(vegan);

    // 5) Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
// const numbers = [39, 2, 4, 25, 62]
// Salida--> 483600
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);