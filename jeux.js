let li = document.getElementsByClassName("carte");

const ulTurn = document.getElementsByClassName("ulTurn");

// tableau pour stocker le premier résultat afin de pouvoir le comparer
let valeurCarte = [];
let count = 0;
let score = 0;
let scoreAdverse = 0;

// fonction compteur de point et de coup (max 2)
function compteur() {
  // compteur de coup
  let count = 0;
  const maListe = document.querySelectorAll(".lesCartes .carte");

  maListe.forEach((carte) => {
    carte.addEventListener("click", function () {
      count++;
      console.log(count);
      if (count === 2) {
        
        count = 0;
        valeurCarte.length = 0;
        console.log("tour terminé");
        
        verso();
        
      }
      
    });
  });
  
  
}

function Score(){

    //compteur de points
  score++;
  const textScore = document.getElementsByClassName('points')[0].innerText = `Votre score : ${score}`
  if(score === 3){
    alert('YOU WIN !!!')
  }
}

// fonction remet les cartes a leur position initial apres 2 coup
function verso() {
  const li = document.querySelectorAll("li");

  li.forEach(function (element) {
    element.classList.remove("ulTurn");
    element.classList.add("carte");
  });
}

// fonction retourne les carte (max 2) en attribuant la classe "ulTurn" a la carte cliqué
function recto() {
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
      li[i].classList.add("ulTurn");

      jeu();
      if(i === 2){
        adverse()
      }
    });
  }
}

function adverse(){

    
    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);
    

    

    if(random1 === random2){
        scoreAdverse++
        const textScoreAdverse = document.getElementsByClassName('adversPoints')[0].innerText = `Score de l'adversaire : ${scoreAdverse}`
        alert('Fin du tour adverse: win')
    }else{
        alert('Fin du tour adverse : loose')
    }  

}


function jeu() {
  

  let tableauCarte =[1, 2, 3, 4]
  let cartas = Math.floor(Math.random() * tableauCarte.length)
  let cartas2 = Math.floor(Math.random() * tableauCarte.length)
  let aleaCarte = tableauCarte[cartas]
  let aleaCarte2 = tableauCarte[cartas2]
  
  let tirage1 = aleaCarte
  let tirage2 = aleaCarte2
  
  for (let i = 0; i <= 10; i++) {
    
    console.log(` score = ${score} `);

    //compare le contenue de valeurCarte a celui du random
    let victoire = valeurCarte.includes(random);
    // si le chiffre tiré par la carte random est un doublon de celui tiré dans le tableau valeurCarte, alors gagne et incrémente le score
    if (tirage1 === tirage2) {
      Score()
      


      const text = (document.getElementsByClassName(
        "winOrLoose"
      )[0].innerText = `${tirage1} | ${tirage2}  Gagné, tien, prend une sucette !`);

      console.log("doublon ! ");
      compteur();
      verso();
    } else {
      // sinon perd
      const text = (document.getElementsByClassName(
        "winOrLoose"
      )[0].innerText = `${random} | ${valeurCarte}`);
      valeurCarte.push(random);
      console.log("loupé !");
      

    }

    
    return ;
  }
}

recto();
compteur();

