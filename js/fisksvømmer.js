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