
// HTML-elementer:
const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");
const main = document.querySelector("main");

const db = firebase.database();
const meldinger = db.ref("minemessengermeldinger");


// Definerer en bruker
let user;

function lagreMelding(evt) {
    evt.preventDefault();
    // Legger inn tekst, user id , displayName, profilbilde og tidspunkt for når meldingen ble sendt
    meldinger.push({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        tekst: inpMelding.value
    });
    skjema.reset();
}

function visMelding(snap) {
    const melding = snap.val();

    let klasse = "others";
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === melding.uid) {
        klasse = "me";
    }

    let bilde = "anonym.png";
    if(melding.photoURL) {
        bilde = melding.photoURL;
    }

    secMeldinger.innerHTML += `
        <div class="${klasse}">
            <img src="${bilde}" title="${melding.displayName}">
            <span>${melding.tekst}</span>
        </div>
    `;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        skjema.addEventListener("submit", lagreMelding);
        meldinger.on("child_added", visMelding);
    } else {
        main.innerHTML = `
            <div class="notloggedin">
                <h1>You are not signed in</h1>
                <a href="login.html">sign in here</a>
            </div>
        `;
    }
});
