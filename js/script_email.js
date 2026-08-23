
// 1. REEMPLAZA CON TU PUBLIC KEY
emailjs.init("0JT-lGkMn2Ab_Owqc");

const form = document.getElementById('form-contacto');
const btn = document.getElementById('boton');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //Validación del formulario:
    const nombreValor = document.getElementById('nombre1').value.trim();
    const emailValor = document.getElementById('email1').value.trim();
    const mensajeValor = document.getElementById('mensaje1').value.trim();

    if(nombreValor === '' || emailValor === '' || mensajeValor === ''){
        alert('Completa todos los campos correctamente.');
        return;
    }
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    // 2. REEMPLAZA CON TU SERVICE_ID Y TEMPLATE_ID
    emailjs.sendForm('service_ylntpdg', 'template_9kaqjon', this)
        .then(() => {
            alert('¡Correo enviado con éxito!');
            console.log("Enviado con exito.");
            form.reset();
        })
        .catch((err) => {
            alert('Error al enviar el correo. Por favor intenta de nuevo.');
            console.log("Error al enviar.");
            console.error('EmailJS Error:', err);
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Enviar';
        });
});
