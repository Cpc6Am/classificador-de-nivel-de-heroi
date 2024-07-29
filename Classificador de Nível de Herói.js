let xp = 3466
let nome = "NameLess"
let nivel

function heroNivel(xp){
  
  if (xp <= 1000){
    return nivel = "Ferro";
  }else if (xp >= 1001 && xp <= 2000){
    return nivel = "Bronze";
  }else if  (xp >= 2001 && xp <= 5000){
    return nivel = "Prata";
  }else if  (xp >= 5001 && xp <= 7000){
    return nivel = "Ouro";
  }else if  (xp >= 7001 && xp <= 8000){
    return nivel = "Platina";
  }else if  (xp >= 8001 && xp <= 9000){
    return nivel = "Ascendente";
  }else if  (xp >= 9001 && xp <= 10000){
    return nivel = "Imortal";
  }else if (xp >= 100001){
    return nivel = "Radiante";
  }

}

heroNivel(xp)

console.log("O Herói de nome "+ nome +" está no nível "+ nivel)
