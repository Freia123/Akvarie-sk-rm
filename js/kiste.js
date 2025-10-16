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

const DYKKER_DURATION_MS = 2000; // glide-ind varighed

window.addEventListener('load', () => {
    const diver  = document.getElementById('diver');
    const speech = document.getElementById('speech');

    // start glide-ind straks (eller fx 0,1-0,2s efter load)
    setTimeout(() => {
        diver.classList.add('show');

        // vis talebobbel når han er færdig
        setTimeout(() => {
            speech.classList.add('show');
        }, DYKKER_DURATION_MS);

    }, 100); // 0,1s efter load
});