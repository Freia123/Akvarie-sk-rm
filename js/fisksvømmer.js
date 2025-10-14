// Gør alle billeder med data-navn klikbare
document.querySelectorAll('img[data-navn]').forEach(img => {
img.style.cursor = 'pointer';
img.addEventListener('click', function() {
const navn = img.getAttribute('data-navn');
if (navn === 'Dværgkejser') {
// Naviger til dværgkejser.html hvis det er Dværgkejser
window.location.href = 'dværgkejser.html';
} else {
// Ellers vis popup med info
const info = img.getAttribute('data-info');
document.getElementById('popupNavn').textContent = navn;
document.getElementById('popupTekst').textContent = info;
document.getElementById('infoPopup').style.display = 'block';
}
});
});

// Luk popup når der klikkes på knappen
document.getElementById('lukPopup').addEventListener('click', function() {
document.getElementById('infoPopup').style.display = 'none';
});