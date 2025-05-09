let li = document.querySelectorAll(".carte");
const btn = document.querySelectorAll(".tirage")

const ulTurn = document.getElementsByClassName("ulTurn");

// tableau pour stocker le premier résultat afin de pouvoir le comparer
let valeurCarte = [];
let count = 0;
let score = 0;
let scoreAdverse = 0;

let tableauCarte = [1,2,3,4]

  let imageCarte = {

    1: "img/sardine.webp",
    2: "img/yugioh.jpg",
    3: "img/deadpool.jpg",
    4: "img/gnome.webp"
  }

// fonction retourne les carte (max 2) en attribuant la classe "pioche" au clic sur le bouton associé
function recto() {
  for (let i = 0; i < li.length; i++) {
    btn[i].addEventListener("click", function() {
      
      li[i].classList.add("pioche");
      
      
      
    });

    return
  }
}



// fonction compteur de point et de coup (max 2)
function compteur() {
  // compteur de coup
  
  const maListe = document.querySelectorAll(".lesCartes .carte");
 

  
  maListe.forEach((carte) => {
    carte.addEventListener("click", function () {
      
  alert("fonction compteur")

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

  
  return 
}

// fonction remet les cartes a leur position initial apres 2 coup
function verso() {
  const li = document.querySelectorAll("li");

  
    
  li.forEach(function (element) {

    
      element.classList.remove("pioche");
      element.classList.add("carte");

    
  });
return
  

}



function adverse(){

    valeurCarte.length=0;
    
    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);
    
    

    if(random1 === random2){
        scoreAdverse++
        const textScoreAdverse = document.getElementsByClassName('adversPoints')[0].innerText = `Score de l'adversaire : ${scoreAdverse}`
        alert('Fin du tour adverse: win')
        
        
    }else{
        alert('Fin du tour adverse : loose')
        
        
    }  

    
return
    

}

function aleaCarte(){
  
  let cartas = Math.floor(Math.random() * tableauCarte.length)
  let aleaCarte = tableauCarte[cartas]

  let img = document.createElement('img');
    
    img.src = imageCarte[aleaCarte];
    
    img.style.width = '200px';
    document.body.appendChild(img)
    document.getElementById('zoneCarte').appendChild(img)

    console.log(tableauCarte[cartas])
    return tableauCarte[cartas]

    
}


let tirageCarte1 
let tirageCarte2 
let tirageCarte3
let tirageCarte4




function comparaison(){

  
  if(valeurCarte[0] === valeurCarte[1]){
    alert("u win")
    
    Score()
    adverse()
    recto()
    
  }else{
    alert("u loose")
    adverse()
    recto()
    
  }

  return
    
  }

  



function tiragePremier() {



    count++;
  let tirageCarte1 = aleaCarte()
  valeurCarte.push(tirageCarte1)
  console.log("valeur :", valeurCarte[0])

    console.log("si count = 1",tirageCarte1)
      
      let sortie = document.getElementsByClassName('sortie')[0].innerText = ` Premiere pioche :  ${tirageCarte1}`
      

      if(count === 2){
        comparaison()
      }
     return

  }
  
    
  

function tirageDeux(){


  
  count++;
    let tirageCarte2 = aleaCarte()
    valeurCarte.push(tirageCarte2)
  console.log("valeur :", valeurCarte)

    console.log("si count = 2",tirageCarte2)
   
    let sortie2 = document.getElementsByClassName('sortie2')[0].innerText = ` Deuxieme pioche :  ${tirageCarte2}`
    
    if(count === 2){
      comparaison()
    }
    return
  }


  function tirageTrois(){

    
    count++;
    let tirageCarte3 = aleaCarte()
    valeurCarte.push(tirageCarte3)
  console.log("valeur :", valeurCarte)

    console.log("si count = 2",tirageCarte2)
   
    let sortie2 = document.getElementsByClassName('sortie2')[0].innerText = ` Deuxieme pioche :  ${tirageCarte3}`
    


    if(count === 2){
      comparaison()
    }
    return
  }


  function tirageQuatre(){

    count++;
    let tirageCarte3 = aleaCarte()
    valeurCarte.push(tirageCarte4)
  console.log("valeur :", valeurCarte)

    console.log("si count = 2",tirageCarte4)
   
    let sortie2 = document.getElementsByClassName('sortie2')[0].innerText = ` Deuxieme pioche :  ${tirageCarte4}`
    

    if(count === 2){
      comparaison()
    }
    return
  }

  

  

  recto()
  
  







  






