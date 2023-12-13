let nomeHeroi = prompt("Escreva o nome do seu Heroi: ")
document.write("Seja Bem vindo ao Servidor: ",nomeHeroi)

let xp = prompt("Escreva o nivel de xp seu Heroi: ")

if (xp <= 1000) {
    console.log("Você está na categoria: Ferro")
} else if (xp >= 1001 && xp <= 2000) {
    console.log("Você está na categoria: Bronze")
} else if (xp >= 2001 && xp <= 3000) {
    console.log("Você está na categoria: Prata")
} else if (xp >= 3001 && xp <= 7000) {
    console.log("Você está na categoria: Ouro")
} else if (xp >= 7001 && xp <= 8000) {
    console.log("Você está na categoria: Platina")
} else if (xp >= 8001 && xp <= 9000) {
    console.log("Você está na categoria: Ascendente")
} else if (xp >= 9001 && xp <= 10000) {
    console.log("Você está na categoria: Imortal")
} else {
    console.log("Você está na categoria: Radiante")
} console.log ("O Herói de nome " + nomeHeroi + " está no nivel: " + xp )
