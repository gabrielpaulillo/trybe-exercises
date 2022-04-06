const salarioBruto = 3485.10
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let impostoRenda;

    if(salarioBruto <= 1556.94) {
        aliquotaINSS = 0.08;
        salarioBase = salarioBruto - (salarioBruto*aliquotaINSS);
    } else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
        aliquotaINSS = 0.09;
        salarioBase = salarioBruto - (salarioBruto*aliquotaINSS);
    } else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
        aliquotaINSS = 0.11;
        salarioBase = salarioBruto - (salarioBruto*aliquotaINSS);
    } else if (salarioBruto > 5189.82) {
        aliquotaINSS = 570.88;
        salarioBase = salarioBruto - aliquotaINSS;
    } else {
        console.log("ERRO")
    }

    console.log("O salário base é: " + salarioBase)

    if (salarioBase <= 1903.98) {
        console.log(salarioBase);
    } else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
        impostoRenda = 0.075;
     salarioLiquido = salarioBase - (salarioBase*impostoRenda) - 142.80;
    } else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
        impostoRenda = 0.15;
     salarioLiquido = salarioBase - (salarioBase*impostoRenda) - 354.80;
    } else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
        impostoRenda = 0.225;
     salarioLiquido = salarioBase - (salarioBase*impostoRenda) - 636.13;
    } else if (salarioBase > 4664.68) {
        impostoRenda = 0.275;
     salarioLiquido = salarioBase - (salarioBase*impostoRenda) - 869.36;
    } else {
        console.log("ERRO")
    }

    console.log ("O salário líquido é: " + salarioLiquido);

// const custoProduto = 3;
// let custoProdutoComImposto = custoProduto - (custoProduto*0.2);
// const valorVenda = 10;
// const produtos = 1000;
// let lucro = (produtos * valorVenda) - (produtos*custoProdutoComImposto);

// console.log(lucro);


// const a = 4;
// const b = 7;
// const c = 12;
//  if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
//      console.log(true);
//  } else {
//     console.log(false);
//  }

// const a = 64;
// const b = 3;
// const c = 3;
//  if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//      console.log(true);
//  } else {
//     console.log(false);
//  }

// const notaPorcentagem = -1;

// if (notaPorcentagem < 0 || notaPorcentagem > 100) {
//     console.log("ERRO");
// } else if (notaPorcentagem >= 90) {
//     console.log("A");
// } else if (notaPorcentagem >= 80) {
//     console.log("B");
// } else if (notaPorcentagem >= 70) {
//     console.log("C");
// } else if (notaPorcentagem >= 60) {
//     console.log("D");
// } else if (notaPorcentagem >= 50) {
//     console.log("E");
// } else if (notaPorcentagem < 50) {
//     console.log("F");
// } else {
//     console.log("ERRO");
// }

// let pecaXadrez = "Rainha";

// switch (pecaXadrez) {
//     case "torre":
//     case "TORRE":
//     case "Torre":
//         console.log("apenas movimentos verticais e horizontais");
//         break;
//     case "cavalo":
//     case "CAVALO":
//     case "Cavalo":
//         console.log("apenas movimentos em L");
//         break;
//     case "bispo":
//     case "BISPO":
//     case "Bispo":
//         console.log("apenas movimentos na diagonal");
//         break;
//     case "rainha":
//     case "RAINHA":
//     case "Rainha":
//         console.log("movimentos para todas as direcões e quantas casas quiser");
//         break;
//     case "rei":
//     case "REI":
//     case "Rei":
//         console.log("movimentos para todas as direcões, mas somente uma casa por vez");
//         break;
//     case "peao":
//     case "PEAO":
//     case "Peao":
//         console.log("movimentos apenas para frente, sendo uma casa por turno");
//         break;
//     default:
//         console.log("peca não encontrada");
// }

// const a = 74;
// const b = 75;
// const c = 30;
// let resultado = a + b + c;

// if (resultado < 180) {
//     console.log(false);
// } else if (resultado > 180) {
//     console.log(false);
// } else {
//     console.log(true);
// }

// const valor = 0;

// if (valor > 0) {
//     console.log("positive");
// } else if (valor < 0) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }

// const a = 50;
// const b = 50;
// const c = 50;

// if (a > b && a > c) {
//     console.log("a é maior que b e c");
// } else if (b > a && b > c) {
//     console.log("b é maior que a e c");
// } else if (c > a && c > b) {
//     console.log("c é maior que a e b");
// } else {
//     console.log("os três números possuem o mesmo valor")
// }

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);