const Name = document.getElementById("Name");
const Mail = document.getElementById("Mail");
const Pass = document.getElementById("Pass");

//login
const login = document.getElementById('login')
console.log(login)


//ecouteur btn validation login
login.addEventListener("click", (e) => {

    
    e.preventDefault();

    const valeurName = JSON.stringify(Name.value);
    const valeurMail = JSON.stringify(Mail.value);
    const valeurPass = JSON.stringify(Pass.value);

    const monNom = localStorage.getItem('Nom');
    const monMail = localStorage.getItem('Mail');
    const monPass = localStorage.getItem('Pass');

    if(Name.value === "" || Mail.value === "" || Pass.value === ""){
        alert("Veuillez remplir tout les champs")
    }

    if( monNom === valeurName && monMail === valeurMail && monPass === valeurPass){
        
        window.location.href = "logged.html"
    }else{
        alert("mauvaise coordonées")
    }

    
})

localStorage.getItem("Nom");
localStorage.getItem("Mail");
localStorage.getItem("Pass");