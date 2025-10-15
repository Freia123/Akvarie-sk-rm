const GIF_DURATION_MS = 1600;

  // Skift til GIF (starter animation)
  kiste.src = 'images/skattekiste.gif';

  // Fade "Tryk her" væk
  if (label) {
    label.classList.add('fade-out');
    setTimeout(() => (label.style.display = 'none'), 600);
  }

function startgif(){
  const kiste  = document.querySelector('.kiste');
  const label  = document.querySelector('.label');
  const diver  = document.getElementById('diver');
  const speech = document.getElementById('speech');

  // start gif
  if (kiste) kiste.src = 'images/skattekiste.gif';

  // skjul "Tryk her"
  if (label){
    label.classList.add('fade-out');
    setTimeout(()=>label.style.display='none', 600);
  }

  // når kisten forventes åben → dykker ind, derefter taleboblen
  setTimeout(()=>{
    diver?.classList.add('show');
    setTimeout(()=> speech?.classList.add('show'), 600);
  }, GIF_DURATION_MS);
}