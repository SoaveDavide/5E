const btn = document.body.querySelector(".Blogin");
btn.addEventListener("click",function(){
    const widht = screen.width /4; //25%
    const heihgt = screen.height/2; //50%
    //calcola come mettere al centro dello schermo la finestra
    const left = (screen.width - widht) / 2;
    const top = (screen.height - heihgt) / 2;
    
    let newWindow = document.open("","","width = " + widht+ ",height = "+heihgt + ",left = " + left + ",top = " + top);

    let loginCss = newWindow.document.createElement("link");
    loginCss.rel = "stylesheet";
    loginCss.href = "style.css";

    newWindow.document.head.appendChild(loginCss);

    let form = newWindow.document.createElement("form");
    form.classList = "container";

    let userName = newWindow.document.createElement("input");
    userName.type = "text";
    userName.placeholder = "Nome Utente";
    userName.required = true;
    
    let password = newWindow.document.createElement("input");
    password.type = "password";
    password.placeholder = "password";
    password.required = true;

    let submit = newWindow.document.createElement("input");
    submit.type = "submit";
    submit.value = "INVIA DATI";
    submit.classList = "login";

    newWindow.document.body.appendChild(form);

    form.appendChild(userName);
    form.appendChild(password);
    form.appendChild(newWindow.document.createElement("br"));
    form.appendChild(submit);

    let script2 = newWindow.document.createElement("script");
    script2.src = "script2.js";

    newWindow.document.body.appendChild(script2);
});
document.querySelector("p").textContent = localStorage.getItem("username") + "---" +localStorage.getItem("password");
//dropdown con js
const btnDrop = document.querySelector(".dropbtn");
btnDrop.addEventListener("click", function(){

    //selezioni il contenitore del drop-down
    var dropdownContent = document.querySelector(".dropdown-content");

    //creazione dei link
    var insegnanti = document.createElement('button');
    var studenti = document.createElement('button');
    var classi = document.createElement('button');

    //link a cui puntano
    insegnanti.textContent = 'Insegnanti';
    studenti.textContent = 'Studenti';
    classi.textContent = 'Classi';

    //aggiungo lo stile ai bottoni
    insegnanti.classList.add('buttonDrp');
    studenti.classList.add('buttonDrp');
    classi.classList.add('buttonDrp');

    //collegamento bottoni con i link
    insegnanti.addEventListener("click",function(){
        window.location.href = "#Insegnanti";
    });
    studenti.addEventListener("click", function(){
        window.location.href = "#Studenti";
    });
    classi.addEventListener("click", function(){
        window.location.href = "#Classi";
    });

    //aggiungo i link al dropdown
    dropdownContent.appendChild(insegnanti);
    dropdownContent.appendChild(studenti);
    dropdownContent.appendChild(classi);
});