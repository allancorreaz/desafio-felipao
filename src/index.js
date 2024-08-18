let nome = "Sasuke";
let xp_heroi = 120000;
let nivel;

if (xp_heroi< 1000){
    nivel = "Ferro";
} else if (xp_heroi >= 1001 && xp_heroi <= 2000){
    nivel = "Bronze";
}else if (xp_heroi >= 2001 && xp_heroi <= 5.000){
    nivel = "Prata";
} else if (xp_heroi >= 5001 && xp_heroi <= 7.000){
    nivel = "Ouro";
} else if (xp_heroi >= 7001 && xp_heroi <= 8.000){
    nivel = "Platina";
} else if (xp_heroi >= 8001 && xp_heroi <= 9.000){
    nivel = "Ascendente";
}else if (xp_heroi >= 9001 && xp_heroi <= 10000){ 
    nivel = "Imortal";
} else if (xp_heroi >= 10001 && xp_heroi <= 11000){
    nivel = "Radiante";
} else {xp_heroi >= 11001
    nivel = "hokage e sanin lendário do mundo ninja"
}

console.log("O herói " + nome, "está no nível " + nivel)