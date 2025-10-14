// Grøn kommentar: Logger til konsollen at JavaScript-filen kører
console.log("js kører fedt nok")

// Grøn kommentar: Indeholder data for hver række af fisk: hvilken retning de svømmer og hvilke billeder, der skal bruges
let fiskerækker = [
{
retning: 'fraHøjre',
fisk: ['Dværgkejser.png', 'Kleinsfanefisk.png', 'Pincetfisk.png']
},
{
retning: 'fraVenstre',
fisk: ['Klovnkisk.png', 'Kanariegylte.png']
},
{
retning: 'fraHøjre',
fisk: ['Hvidstribetkirurg.png', 'Orangeplettetkirurg.png', 'Gulkirurg.png']
},
{
retning: 'fraVenstre',
fisk: ['Sortbåndetkirurg.png', 'Paletkirurg.png', 'Kongefebars.png']
}
];

// Grøn kommentar: Her samles HTML-outputtet til fiskerækkerne
let output = "";


// Grøn kommentar: Laver HTML for hver række af fisk
for (let fiskerække of fiskerækker) {
output += `<div class="fiskeRække ${fiskerække.retning}">`;
for (let fisk of fiskerække.fisk) {
// Grøn kommentar: Hvis retning er fraVenstre, tilføj klassen 'flip', så fisken spejlvendes
const flipClass = fiskerække.retning === 'fraVenstre' ? 'flip' : '';
output += `
<figure class="fisk">
<img src="images/${fisk}" alt="fisk" class="${flipClass}">
</figure>`;
}
output += `</div>`;
}

// Grøn kommentar: Indsætter de genererede fiskerækker i DOM'en, så de vises på siden
document.getElementById('akvarie').innerHTML = output;



let fiskerækker = [
  {
    retning: 'fraHøjre',
    fisk: [
      { navn: 'Dværgkejser', fil: 'Dværgkejser.png', info: 'En lille, farverig kejserfisk – lille af størrelse, men ser ud som kongelig kunst.' },
      { navn: 'Kleins fanefisk', fil: 'Kleinsfanefisk.png', info: 'Har lange hvide, sorte og gule striber og en høj, elegant finne – som en flag-bærer i havet.' },
      { navn: 'Pincetfisk', fil: 'Pincetfisk.png', info: 'Har en lang, smal snude som en pincet, så den kan nå ind i små sprækker for at finde mad.' }
    ]
  },
  {
    retning: 'fraVenstre',
    fisk: [
      { navn: 'Klovnefisk', fil: 'Klovnefisk.png', info: 'Den berømte Klovnefisk, kendt fra filmen “Find Nemo”. Den lever i søanemoner og er beskyttet af deres giftige fangarme.' },
      { navn: 'Kanarie gylte', fil: 'Kanariegylte.png', info: 'Lysende gul som en lille kanariefugl, men den svømmer under vandet i stedet for at flyve.' }
    ]
  },
  {
    retning: 'fraHøjre',
    fisk: [
      { navn: 'Hvidstrubet kirurg', fil: 'Hvidstrubetkirurg.png', info: 'En sej fisk med en lys stribe under hagen – som en fin hvid skjorte. Den bruger sin lille "kirurgkniv" til at forsvare sig.' },
      { navn: 'Orangeplettet kirurg', fil: 'Orangeplettetkirurg.png', info: 'På dens krop sidder små orange prikker – næsten som stjerner på en nattehimmel.' },
      { navn: 'Gul kirurg', fil: 'Gulkirurg.png', info: 'Hele fisken er gul som solen! Den svømmer ofte i store grupper, så det ligner en gul sky under vandet.' }
    ]
  },
  {
    retning: 'fraVenstre',
    fisk: [
      { navn: 'Sortbåndet kirurg', fil: 'Sortbåndetkirurg.png', info: 'Den har mørke striber, som ser ud som bælter på tværs af kroppen – en rigtig zebrafisk i kirurg-familien.' },
      { navn: 'Palet kirurg', fil: 'Paletkirurg.png', info: 'Den har blå krop med sort mønster og en gul hale – som et levende maleri! Den er lidt glemsom, men altid venlig.' },
      { navn: 'Konge Febars', fil: 'Kongefebars.png', info: 'En storslået fisk i blå og gule farver – som en konge med kappe.' }
    ]
  }
];

let output = "";

for (let fiskerække of fiskerækker) {
  output += <div class="fiskeRække ${fiskerække.retning}">;
  for (let fisk of fiskerække.fisk) {
    output += `
      <figure class="fisk" data-navn="${fisk.navn}" data-info="${⁦fisk.info⁩}">
        <img src="images/${fisk.fil}" alt="${fisk.navn}">
      </figure>`;
  }
  output += </div>;
}

document.getElementById('akvarie').innerHTML = output;

const popup = document.createElement('div');
⁦popup.id⁩ = "infoPopup";
popup.innerHTML =
  <div class="popupIndhold">
    <h2 id="popupNavn"></h2>
    <p id="popupTekst"></p>
    <button id="lukPopup"></button>
  </div>;
  document.body.appendChild(popup);

  document.querySelectorAll('.fisk').forEach(fisk => {
    fisk.addEventListener('click',() => {
      const navn = fisk.dataset.navn;
      const info = ⁦fisk.dataset.info⁩;
      document.getElementById('popupNavn').textContent = navn;
      document.getElementById('popupTekst').textContent = info;
      popup.classList.add('vis');
    });
  });

  document.getElementById('lukPopup').addEventListener('click', ()=> {
    popup.classList.remove('vis');
  });