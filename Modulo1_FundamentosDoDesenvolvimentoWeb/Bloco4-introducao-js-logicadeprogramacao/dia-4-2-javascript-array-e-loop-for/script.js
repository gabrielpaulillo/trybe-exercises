let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position;

for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 1; secondIndex < index; secondIndex += 1) {
        if(numbers[index] < numbers[secondIndex]) {
            position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }

    console.log(numbers[index]);
}



// Exercicio 9 - dia4.2
// let listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//                          17,18,19,20,21,22,23,24,25]

//     for(let numeros of listaNumeros) {
//         numeros /= 2;
//         console.log(numeros);
//     }

//Exercício 8 - dia4.2
// let listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//                     17,18,19,20,21,22,23,24,25]

//     // for (let index = 0; index < listaNumeros.length; index +=1) {
//     //     console.log(listaNumeros[index]);
//     // }
//     for(let numeros of listaNumeros) {
//         console.log(numeros);
//     }


// Exercicio 7 - dia4.2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 100;

// for (let index = 0; index < numbers.length; index += 1) {
//     if(resultado < numbers[index]) {
//         resultado = resultado;
//     } else if (resultado > numbers[index]) {
//         resultado = numbers[index];
//     } else {
//         resultado = resultado;
//     }
// }
// console.log(resultado);

//Exercicio 6 - dia4.2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 != 0) {
//         console.log(numbers[index]);
//     } else {
//         console.log("Nenhum valor ímpar encontrado");
//     }
// }

//Exercicio 5 - dia4.2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if(resultado > numbers[index]) {
//         resultado = resultado;
//     } else if (resultado < numbers[index]) {
//         resultado = numbers[index];
//     } else {
//         resultado = resultado;
//     }
// }
// console.log(resultado);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // .reduce((partialSum, a) => partialSum +a, 0);
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     // for (let numeros of numbers) {
//     //     numeros += numbers[index];
        
//     // }
//     resultado += numbers[index];
// }
// resultado /= numbers.length;
// console.log(resultado);

// console.log(numbers);


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// let word = "Simpsons"

// for(let nomes of word) {
//     console.log(nomes)
// }

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }

// let listaDeNomes = ["Joana", "Maria", "Gabriella", "Joaquina"]

// for (let indice = 0; indice < listaDeNomes.length; indice++) {
//     console.log(listaDeNomes[indice])
// }

// let numero = 3;

// for(let contador = 1; contador <= 9; contador++) {
//     console.log(numero * contador);
// }