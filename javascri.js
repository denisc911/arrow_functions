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
    { name: 'Jenny', edad: 10 },
   ]

//    Crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 

// Filtrar personas mayores de 25 años usando forEach
const mayorDe25 = [];
people.forEach(persona => {
    if (persona.age > 25) {
        mayorDe25.push(persona);
    }
});
console.log("Personas mayores de 25 años:", mayorDe25);

// Filtrar personas cuyos nombres comienzan con "J" usando forEach
const empiezaConJ = [];
people.forEach(persona => {
    if (persona.name.startsWith('J')) {
        empiezaConJ.push(persona);
    }
});
console.log("Personas cuyos nombres empiezan con J:", empiezaConJ);

// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// Crea un array con la gente que empieza por J. 
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
