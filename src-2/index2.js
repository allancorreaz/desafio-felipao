let nome = "Naruto";
let xp_heroi = 12000;
let nivel;

switch (xp_heroi){
    case xp_heroi < 1000: 
    nivel = "Ferro"

    case xp_heroi >= 1001 && xp_heroi <= 2000:
    nivel = "Bronze";

    case xp_heroi >= 2001 && xp_heroi <= 5.000:
    nivel = "Prata";
    
    case xp_heroi >= 5001 && xp_heroi <= 7.000:
    nivel = "Ouro";
    
    case xp_heroi >= 7001 && xp_heroi <= 8.000:
    nivel = "Platina";

    case xp_heroi >= 8001 && xp_heroi <= 9.000:
    nivel = "Ascendente";

    case xp_heroi >= 9001 && xp_heroi <= 10000:
    nivel = "Imortal";

    case xp_heroi >= 10001 && xp_heroi <= 11000:
    nivel = "Radiante";
    
    default:
    nivel = "hokage e sanin lendário do mundo ninja"


console.log("O herói " + nome, "está no nível " + nivel)}