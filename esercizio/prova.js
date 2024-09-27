// Riferimento al bottone "accedi"
const btn = document.querySelector(".Blogin");

// Funzione che verifica se c'è uno username salvato e aggiorna il testo del bottone
function Controllo() {
    const usernameSalvato = localStorage.getItem("username");
    if (usernameSalvato) {
        btn.textContent = usernameSalvato;
    } else {
        btn.textContent = "accedi"; // Mantieni "accedi" se non ci sono dati salvati
    }
}

// Chiamata alla funzione al caricamento della pagina per impostare il testo corretto
Controllo();

btn.addEventListener("click", function() {
    const widht = screen.width / 3; // 25%
    const heihgt = screen.height / 2; // 50%
    // Calcola come mettere al centro dello schermo la finestra
    const left = (screen.width - widht) / 2;
    const top = (screen.height - heihgt) / 2;

    let newWindow = window.open("", "", "width=" + widht + ",height=" + heihgt + ",left=" + left + ",top=" + top);

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

    // Aggiungi il listener per il submit del form
    submit.addEventListener("click", function(e) {
        e.preventDefault(); // Previene l'invio del form
        const enteredUserName = userName.value;
        const enteredPassword = password.value;

        if (enteredUserName && enteredPassword) {
            localStorage.setItem("username", enteredUserName);
            localStorage.setItem("password", enteredPassword);
            window.opener.location.reload();
            newWindow.close();
        } else {
            alert("inserire i dati");
        }
    });
});

// Dropdown con JS
const btnDrop = document.querySelector(".dropbtn");
btnDrop.addEventListener("click", function() {
    // Selezioni il contenitore del drop-down
    var dropdownContent = document.querySelector(".dropdown-content");

    // Creazione dei link
    var insegnanti = document.createElement('button');
    var classi = document.createElement('button');

    // Link a cui puntano
    insegnanti.textContent = 'Insegnanti';
    classi.textContent = 'Classi';

    // Aggiungo lo stile ai bottoni
    insegnanti.classList.add('buttonDrp');
    classi.classList.add('buttonDrp');

    // Collegamento bottoni con i link
    insegnanti.addEventListener("click", function() {
        window.location.href = "#Insegnanti";
    });
    classi.addEventListener("click", function() {
        window.location.href = "#Classi";
    });

    // Aggiungo i link al dropdown
    dropdownContent.appendChild(insegnanti);
    dropdownContent.appendChild(classi);
});
