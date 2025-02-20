/* Objeto formulario */
const formulario = {
    nombre: 'Eduardo', 
    email: 'eduardo@outlook.com', 
    mensaje: 'Hola'
};  

/* Funciones */
const validación = (datos) => {
    if (datos.nombre === '' || datos.email === '' || datos.mensaje === '') {
        console.log('Por favor completa todos los campos.'); 
    } else {
        enviarFormulario(); 
    }
};

const enviarFormulario = () => {
    console.log('¡Formulario enviado con éxito!'); 
};

/* Llamar función */
validación(formulario);