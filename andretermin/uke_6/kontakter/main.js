//variabler som refererer til html-elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter")

//variabler som referer til firebase-databasen
const db = firebase.database();
const kontakter = db.ref("kontakter")

//registrere ny kontakt
function registrerKontakt(hendelse){
  hendelse.preventDefault(); //hindrer at skjemaet gjør at vi går til en ny nettside
  const key = inpTelefon.value;
  const data = {
    "navn": inpNavn.value,
    "epost": inpEpost.value
  };
  const kontakt = kontakter.child(key);
  kontakt.set(data);

  skjema.reset();
  alert("bruker registrert")
}

skjema.addEventListener("submit", registrerKontakt)

function visKontakt(snapshot){
  const telefon = snapshot.key;
  const kontakt = snapshot.val();
  console.log(kontakt);
  secKontakter.innerHTML += `
  <div>${kontakt.navn}</div>
  <div>${telefon}</div>
  <div>${kontakt.epost}</div>`;
}

kontakter.on("child_added" ,visKontakt)
