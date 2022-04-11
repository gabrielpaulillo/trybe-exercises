// // 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   leitor.livrosFavoritos.push(
//       {
//           titulo: "Harry Potter e o Prisioneiro de Azkaban",
//           autor: "JK Rowlings",
//           editora: "Rocco",
//       }
//   )

// //   console.log(leitor.livrosFavoritos);

//   console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros!");

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama: " + leitor.livrosFavoritos[0].titulo + "!");

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let info = {
//     personagem: [ 'Margarida', 'Tio Patinhas'] , 
//     origem: [ 'Pato Donald','Christmas on Bear Mountain, Dells Four Color Comics #178', 'O último MacPatinhas' ],
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "Ambos recorrentes",
//   };

//   for (let value in info) {
//       console.log(info[value]);
//   }

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "Sim",
//   };

// //   console.log("Boas vindas, " + info.personagem + "!");
// //   console.log(info.recorrente);
//     // for (let caract in info) {
//     //     console.log(caract);
//     // }
//     for (let value in info) {
//         console.log(info[value]);
//     }


// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let index in car) {
//       console.log(index, car[index]);
//   }

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