const noaGroup = document.querySelector('g.grupo-noroeste').closest('a');
const infoBox = document.getElementById('info-region');
const titulo = document.getElementById('titulo-region');
const descripcion = document.getElementById('descripcion-region');

const neaGroup = document.querySelector('g.grupo-noreste');

noaGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.backgroundImage = "url('../imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg')";
    titulo.textContent = "Región NOA";
    descripcion.textContent = "El Noroeste Argentino destaca por sus paisajes andinos, cerros de colores y una rica cultura ancestral.";
});

noaGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
});

neaGroup.addEventListener('mouseleave', ()=>{
    infoBox.style.display='none';
}
);

neaGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.background = "grey";
    titulo.textContent = "UPS :(";
    descripcion.textContent = "Estamos trabajando en estas paginas";
    descripcion.style.textAlign='center';
});


