/* Objeto */
let opciones = {
    Edad: 18, 
    Accion: 'crear', 
    Numero: 3
};

/* Condiciones if-else, switch-case, operador ternario */
if (opciones.Edad >= 18) {
    console.log('Eres mayor de edad 👨‍🦳');
} else {
    console.log('Eres menor de edad 👶');
};

switch (opciones.Accion) {
    case 'crear': 
        console.log('La acción es crear ➕');
        break;
    case 'colocar': 
        console.log('La acción es colocar 📦');
        break;
    case 'actualizar': 
        console.log('La acción es actualizar 🔄️');
        break;
    case 'borrar': 
        console.log('La acción es borrar ✖️');
        break;
    default: 
        console.log('Acción no valida');
};

let tipoNumero = (opciones.Numero % 2 !== 0) ? 'El número es impar.' : 'El número es par.';
console.log(tipoNumero);

