// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
      console.log(index, car[index]);
  }

// // 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let index in names) {
//     console.log("Olá, " + names[index]);
// }

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medal: { 
//         golden: 2,
//         silver: 3
//     },
//     bestInTheWorld: ["2006", "2007", "2008", "2009", "2010", "2018"]
// }

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade e foi ganhadora por " + player.bestInTheWorld.length + " vezes");
// console.log("A jogadora possui " + player.medal.golden + " medalhas de ouro e " + player.medal.silver + " medalhas de prata.");