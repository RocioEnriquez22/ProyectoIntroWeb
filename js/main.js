const noaGroup = document.querySelector('g.grupo-noroeste').closest('a');
const infoBox = document.getElementById('info-region');
const titulo = document.getElementById('titulo-region');
const descripcion = document.getElementById('descripcion-region');


noaGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.objectFit='cover';    infoBox.style.backgroundImage = "url('../imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg')";
    titulo.textContent = "Región NOA";
    descripcion.textContent = "El Noroeste Argentino destaca por sus paisajes andinos, cerros de colores y una rica cultura ancestral.";
});

noaGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
});

const neaGroup = document.querySelector('g.grupo-noreste');
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

const centroGroup = document.querySelector('g.grupo-centro');
centroGroup.addEventListener('mouseleave', ()=>{
    infoBox.style.display='none';
}
);

centroGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.background = "grey";
    titulo.textContent = "UPS :(";
    descripcion.textContent = "Estamos trabajando en estas paginas";
    descripcion.style.textAlign='center';
});

const patagoniaGroup = document.querySelector('g.grupo-patagonia');
patagoniaGroup.addEventListener('mouseleave', ()=>{
    infoBox.style.display='none';
}
);

patagoniaGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.background = "grey";
    titulo.textContent = "UPS :(";
    descripcion.textContent = "Estamos trabajando en estas paginas";
    descripcion.style.textAlign='center';
});

const pataAustralGroup= document.querySelector('g.grupo-patagoniaAustral');
patagoniaAustralGroup.addEventListener('mouseleave', ()=>{
    infoBox.style.display='none';
}
);

patagoniaAustralGroup.addEventListener('mouseenter', () => {
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.background = "grey";
    titulo.textContent = "UPS :(";
    descripcion.textContent = "Estamos trabajando en estas paginas";
    descripcion.style.textAlign='center';
});

function mostrarInfo(event) {
    // Si la pantalla es menor a 768px, NO ejecutar el código de ocultar/mostrar
    if (window.innerWidth <= 768) {
        return; 
    }

    // Aquí va tu código actual que muestra/oculta el div
    const infoDiv = document.getElementById('info-region');
    //infoDiv.style.display = 'block';
    infoBox.style.display = 'flex';
    infoBox.style.flex='1';
    infoBox.style.objectFit='cover';    infoBox.style.backgroundImage = "url('../imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg')";
    titulo.textContent = "Región NOA";
    descripcion.textContent = "El Noroeste Argentino destaca por sus paisajes andinos, cerros de colores y una rica cultura ancestral.";
}