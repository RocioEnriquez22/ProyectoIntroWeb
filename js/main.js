const noaGroup = document.querySelector('g.grupo-noroeste').closest('a');
const infoBox = document.getElementById('info-region');
const titulo = document.getElementById('titulo-region');
const descripcion = document.getElementById('descripcion-region');
const anchoPantalla = window.innerWidth;
const contenedorMapa = document.getElementById('contenedor-mapa');
const esTactil = window.matchMedia("(hover:none)").matches;

console.log(anchoPantalla);
const anchoPermitido = 707;

if (anchoPantalla < 707) { infoBox.remove(); 
    contenedorMapa.style.justifyContent = 'center'
}

if (esTactil) {
    infoBox.remove();
    contenedorMapa.style.justifyContent = 'center';

}

//../imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg'
noaGroup.addEventListener('mouseenter', () => {
    if (anchoPantalla >= anchoPermitido) {
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.backgroundImage = "url('./imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg')";
        infoBox.style.backgroundSize ='cover';
        infoBox.style.backgroundPosition='center';
        infoBox.style.backgroundRepeat='no-repeat';
        
        titulo.textContent = "Región NOA";
        descripcion.textContent = "El Noroeste Argentino destaca por sus paisajes andinos, cerros de colores y una rica cultura ancestral.";
    }
});

noaGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
});

const neaGroup = document.querySelector('g.grupo-noreste');
neaGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
}
);

neaGroup.addEventListener('mouseenter', () => {
    if (anchoPantalla >= anchoPermitido) {
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.background = "grey";
        titulo.textContent = "UPS :(";
        descripcion.textContent = "Estamos trabajando en estas paginas";
        descripcion.style.textAlign = 'center';

    }
});

const centroGroup = document.querySelector('g.grupo-centro');
centroGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
}
);

centroGroup.addEventListener('mouseenter', () => {
    if (anchoPantalla >= anchoPermitido) {
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.background = "grey";
        titulo.textContent = "UPS :(";
        descripcion.textContent = "Estamos trabajando en estas paginas";
        descripcion.style.textAlign = 'center';
    }
});

const patagoniaGroup = document.querySelector('g.grupo-patagonia');
patagoniaGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
}
);

patagoniaGroup.addEventListener('mouseenter', () => {
    if (anchoPantalla >= anchoPermitido) {
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.background = "grey";
        titulo.textContent = "UPS :(";
        descripcion.textContent = "Estamos trabajando en estas paginas";
        descripcion.style.textAlign = 'center';
    }
});

const pataAustralGroup = document.querySelector('g.grupo-patagoniaAustral');
pataAustralGroup.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
}
);

pataAustralGroup.addEventListener('mouseenter', () => {
    if (anchoPantalla >= anchoPermitido) {
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.background = "grey";
        titulo.textContent = "UPS :(";
        descripcion.textContent = "Estamos trabajando en estas paginas";
        descripcion.style.textAlign = 'center';
    }
});

function mostrarInfo(event) {
    // Si la pantalla
    if (window.innerWidth > anchoPermitido) {
        // Aquí va tu código actual que muestra/oculta el div
        const infoDiv = document.getElementById('info-region');
        //infoDiv.style.display = 'block';
        infoBox.style.display = 'flex';
        infoBox.style.flex = '1';
        infoBox.style.objectFit = 'cover'; infoBox.style.backgroundImage = "url('../imgs/pqCalilegua/carrusel_pn_calilegua_04.jpg')";
        titulo.textContent = "Región NOA";
        descripcion.textContent = "El Noroeste Argentino destaca por sus paisajes andinos, cerros de colores y una rica cultura ancestral.";
        ;
    }

}