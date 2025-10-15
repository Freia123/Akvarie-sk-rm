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