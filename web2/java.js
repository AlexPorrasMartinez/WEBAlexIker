// script.js
document.addEventListener('DOMContentLoaded', () => {
    const formulari = document.getElementById('formulari-contacte');
    
    formulari.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const correuElectronic = document.getElementById('correu-electronic').value.trim();
        const missatge = document.getElementById('missatge').value.trim();
        let errors = [];

        if (!nom) {
            errors.push('El nom és obligatori');
        }

        if (!correuElectronic || !validarCorreuElectronic(correuElectronic)) {
            errors.push('El correu electrònic no és vàlid');
        }

        if (!missatge) {
            errors.push('El missatge és obligatori');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            alert('Formulari enviat correctament!');
            formulari.reset();
        }
    });

    function validarCorreuElectronic(correu) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(correu);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Limpiar mensajes de error y confirmación
        document.getElementById('error-nombre').textContent = '';
        document.getElementById('error-correo').textContent = '';
        document.getElementById('error-mensaje').textContent = '';
        document.getElementById('mensaje-confirmacion').style.display = 'none';

        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const correoElectronico = document.getElementById('correo-electronico').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        let esValido = true;

        // Validar nombre
        if (!nombre) {
            document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
            esValido = false;
        }

        // Validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoElectronico) {
            document.getElementById('error-correo').textContent = 'El correo electrónico es obligatorio.';
            esValido = false;
        } else if (!emailRegex.test(correoElectronico)) {
            document.getElementById('error-correo').textContent = 'El formato del correo electrónico no es válido.';
            esValido = false;
        }

        // Validar mensaje
        if (!mensaje) {
            document.getElementById('error-mensaje').textContent = 'El mensaje es obligatorio.';
            esValido = false;
        }

        // Si todo es válido, mostrar mensaje de confirmación
        if (esValido) {
            document.getElementById('mensaje-confirmacion').style.display = 'block';
            // Resetear el formulario
            formulario.reset();
        }
    });
});

