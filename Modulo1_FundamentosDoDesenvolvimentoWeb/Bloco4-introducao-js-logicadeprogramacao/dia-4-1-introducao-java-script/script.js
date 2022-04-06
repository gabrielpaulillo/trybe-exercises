let estadoCanditato = "Gabriel";

switch (estadoCanditato) {
    case "aprovada":
        console.log("Parabéns");
        break;
    case "lista":
        console.log("Está na lista de espera");
        break;
    case "reprovada":
            console.log("Reprovada, tente novamennte.");
            break;
    default:
        console.log("valor não identificado");
}