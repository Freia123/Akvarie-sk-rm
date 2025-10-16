// Objekt med fisk og deres attributter
const fisk = [
{
navn: "Hvidstrubet kirurg",
storrelse: "Op til 25 cm",
farve: "Blågrå med lys, hvid stribe under hagen",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Alger",
fun_fact: "Har en skarp pig ved haleroden, der fungerer som en 'kirurgkniv' til forsvar."
},
{
navn: "Gul kirurg",
storrelse: "20–25 cm",
farve: "Klar gul over hele kroppen",
bosted: "Rev omkring Hawaii og Stillehavsøerne",
mad: "Alger og små planktonplanter",
fun_fact: "Når mange svømmer sammen, ligner de en gul sky under vandet."
},
{
navn: "Palet kirurg",
storrelse: "Op til 30 cm",
farve: "Blå krop, sort mønster og gul hale",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Alger og plankton",
fun_fact: "Kendt som 'Dory' fra Find Nemo – lidt glemsom, men meget venlig."
},
{
navn: "Sortbåndet kirurg",
storrelse: "20–25 cm",
farve: "Lys krop med sorte tværstriber",
bosted: "Korallrev i det Indiske Ocean",
mad: "Alger",
fun_fact: "Ligner en zebra med sine mørke bælte-lignende striber."
},
{
navn: "Orangeplettet kirurg",
storrelse: "20–25 cm",
farve: "Gråblå krop med små orange prikker",
bosted: "Det Indiske Ocean",
mad: "Alger og smådyr",
fun_fact: "De orange prikker ligner små stjerner på en nattehimmel."
},
{
navn: "Pincetfisk",
storrelse: "12–20 cm",
farve: "Gul og hvid med sort plet ved halen",
bosted: "Korallrev i Stillehavet og Det Indiske Ocean",
mad: "Små krebsdyr og orme i sprækker",
fun_fact: "Den lange snude virker som en pincet – perfekt til at finde mad i små huller."
},
{
navn: "Kanarie gylte",
storrelse: "10–12 cm",
farve: "Klar gul som en kanariefugl",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Små krebsdyr og orme",
fun_fact: "En hurtig og nysgerrig fisk, der ofte holder revet fri for smådyr og parasitter."
},
{
navn: "Dværgkejser",
storrelse: "8–10 cm",
farve: "Blå, orange eller rød med skinnende mønstre",
bosted: "Korallrev i tropiske oceaner",
mad: "Alger og små krebsdyr",
fun_fact: "Selvom den er lille, opfører den sig som en ægte kejser og vogter sit lille territorium."
},
{
navn: "Kleins fanefisk",
storrelse: "15–18 cm",
farve: "Hvid, sort og gul med en lang fane på ryggen",
bosted: "Korallrev i Det Indiske og Stillehavet",
mad: "Smådyr og alger",
fun_fact: "Dens lange rygfinne ligner et flag, der svajer i vandet – derfor kaldes den 'fanefisk'."
},
{
navn: "Klovnefisk",
storrelse: "8–12 cm",
farve: "Orange med hvide og sorte striber",
bosted: "Korallrev i det Indiske og Stillehavet",
mad: "Små planktondyr og rester fra anemoner",
fun_fact: "Lever i symbiose med søanemoner, som beskytter den med giftige fangarme."
},
{
navn: "Konge febars",
storrelse: "20–25 cm",
farve: "Mørkeblå med lodrette hvide striber",
bosted: "Korallrev i det Indiske Ocean",
mad: "Små krebsdyr og fisk",
fun_fact: "Ungerne har et helt andet mønster end de voksne – de skifter farve med alderen."
}
];

// Gør alle billeder med data-navn klikbare
document.querySelectorAll('img[data-navn]').forEach(img => {
img.style.cursor = 'pointer';
img.addEventListener('click', function() {
const navn = img.getAttribute('data-navn');
if (navn === 'Dværgkejser') {
// Naviger til dværgkejser.html hvis det er Dværgkejser
window.location.href = 'dværgkejser.html';
} else if (navn === 'Klovnefisk') {
// Naviger til klovnefisk.html hvis det er Klovnefisk
window.location.href = 'klovnefisk.html';
} else if (navn === 'Kleins fanefisk') {
// Naviger til kleins fanefisk.html hvis det er Klovnefisk
window.location.href = 'kleinsFanefisk.html';
} else if (navn === 'Pincetfisk') {
// Naviger til pincetfisk.html hvis det er Klovnefisk
window.location.href = 'pincetfisk.html';
} else if (navn === 'Kanarie gylte') {
// Naviger til kanarieGylte.html hvis det er Klovnefisk
window.location.href = 'kanarieGylte.html';
} else if (navn === 'Hvidstrubet kirurg') {
// Naviger til hvidstrubetKirurg.html hvis det er Klovnefisk
window.location.href = 'hvidstrubetKirurg.html';
} else if (navn === 'Orangeplettet kirurg') {
// Naviger til orangeplettetKirurg.html hvis det er Klovnefisk
window.location.href = 'orangeplettetKirurg.html';
} else if (navn === 'Gul kirurg') {
// Naviger til gulKirurg.html hvis det er Klovnefisk
window.location.href = 'gulKirurg.html';
} else if (navn === 'Sortbåndet kirurg') {
// Naviger til sortbåndetKirurg.html hvis det er Klovnefisk
window.location.href = 'sortbåndetkirurg.html';
} else if (navn === 'Palet kirurg') {
// Naviger til paletKirurg.html hvis det er Klovnefisk
window.location.href = 'paletKirurg.html';
} else if (navn === 'Konge Febars') {
// Naviger til kongeFebars.html hvis det er Klovnefisk
window.location.href = 'kongeFebars.html';
}
// Gør intet hvis fisken ikke har en dedikeret side
});
});

