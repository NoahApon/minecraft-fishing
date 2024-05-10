// Functionize Minecraft Fishing Start Code

//HTML variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

//fish count variables
  let numCod = 0;
  let numSalmon = 0;
  let numTropical = 0;
  let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
 //selected person
 let character = document.getElementById("character-select").value;

 if (character === "steve") {
  //fish with steve
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.9) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.95) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
 } else if (character === "alex") {
  //fish with alex
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.1) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.2) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.5) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
 } else if (character === "villager") {
  //villager
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.26) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.51) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.76) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
 }
}
