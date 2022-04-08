let array = ['java', 'javascript', 'python', 'html', 'css'];

for (let i = 0; i < array.length; i += 1) {
    for (let k = i + 1; k < array.length; k += 1){
        if(array[i] < array[k]) {
            let j = array[i];
            array[i] = array[k];
            array[k] = j;
        }
    }
    console.log(array[i]);

}

//Exercicio 2 - aula 4.3
// let word = 'paralelepipedo';

// for (let index = word.length - 1 ; index >= 0; index -= 1) {
//     console.log(word[index]);
// }
//Referência reverse loop: https://www.techiedelight.com/loop-through-array-backwards-javascript/

//Exercício 1 - dia 4.3
// const fatorial = [10,9,8,7,6,5,4,3,2,1];

// let resultado = 1;
// for (let i = 0; i < fatorial.length; i++) {
//     resultado *= fatorial[i];
// }

// console.log(resultado);