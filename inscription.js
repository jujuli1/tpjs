
const Name = document.getElementById("Name");
const Mail = document.getElementById("Mail");
const Pass = document.getElementById("Pass");


//inscription
const inpoutName = document.getElementById("inpoutName");
const inpoutMail = document.getElementById("inpoutMail");
const inpoutPass = document.getElementById("inpoutPass");
const inpoutPassConfirm = document.getElementById("inpoutPassConfirm");


// bouton et form inscription
const btn = document.getElementById("valider");
const $form = document.getElementById('local');

let count = 0 





//écouteur inscription
$form.addEventListener('submit', function(event) {

  event.preventDefault()

  

  

    console.log(this.querySelector('#inpoutPass').value);

    

    

   if(inpoutName.value === "" || inpoutMail.value === "" || inpoutPass.value === "" || inpoutPassConfirm.value === ""){

   
    alert(
        "veuillez remplir tout les champs"
      );
      return;
   }

   if(inpoutPass.value !== inpoutPassConfirm.value){
    alert("Les mots de passe ne sont pas identique")
    return
    
   }
   

   //verification syntaxe regex
   const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z]{8,}$";
   const valeurInpoutPass = JSON.stringify(inpoutPass.value);
   const validPass = new RegExp(regex);
   

   if(!validPass.test(valeurInpoutPass)){

    alert("Veuillez choisir un mdp avec minimum 8 characteres !!")
    
   }
   
   if(validPass.test(valeurInpoutPass)){
    alert("Bienvenue !!")
    window.location.href = "loggin.html"
    
   
   }
})





//btn validation inscription
btn.addEventListener('click', (event) => {

  
  

    //convertion JSON
    const valeurInpoutName = JSON.stringify(inpoutName.value);
    const valeurInpoutMail = JSON.stringify(inpoutMail.value);
    const valeurInpoutPass = JSON.stringify(inpoutPass.value);


    //recup valeur des inpout

    if(inpoutName.value && inpoutMail.value  && inpoutPass.value ){

      localStorage.setItem('Nom', valeurInpoutName);
    localStorage.setItem('Mail', valeurInpoutMail);
    localStorage.setItem('Pass', valeurInpoutPass);

    }else{console.log("erreur")}
    

} )



localStorage.getItem("Nom");
localStorage.getItem("Mail");
localStorage.getItem("Pass");





