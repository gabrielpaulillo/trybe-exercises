// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medal: { 
        golden: 2,
        silver: 3
    },
    bestInTheWorld: ["2006", "2007", "2008", "2009", "2010", "2018"]
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade e foi ganhadora por " + player.bestInTheWorld.length + " vezes");
console.log("A jogadora possui " + player.medal.golden + " medalhas de ouro e " + player.medal.silver + " medalhas de prata.");