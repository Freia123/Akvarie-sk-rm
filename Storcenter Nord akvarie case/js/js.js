console.log("js kører fedt nok")
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

let output = "";

for (let fiskerække of fiskerækker) {
    output += `<div class="fiskeRække ${fiskerække.retning}">`;
    for (let fisk of fiskerække.fisk) {
        output += `
        <figure class="fisk">
            <img src="images/${fisk}" alt="fisk">
        </figure>`;
    }
    output += `</div>`;
}

document.getElementById('akvarie').innerHTML = output;
