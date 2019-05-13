//html-elementer
const main = document.querySelector("main");
const db = firebase.database();
const prosjekter =db.ref("prosjekter")

function visProsjekt(snap) {
  const key = snap.key;
  const prosjekter = snap.val();

  const bilder = prosjekter.bilder;
  const indeks = prosjekter.forsidebilde;

  main.innerHTML +=`
    <article style="background-image: url('${bilder[indeks]}')">
    <h1>${prosjekter.tittel}</h1>
    <p>${prosjekter.beskrivelse}</p>
    <a href="prosjekt.html?pid=$(key)">les mer</a>
    </article>
  `;
}

prosjekter.on("child_added", visProsjekt);
