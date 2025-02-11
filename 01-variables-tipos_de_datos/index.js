/* Tipos de datos */
let saludo = '¡Hola Mundo!';
let nombre = 'Juan'; 
let lista = ['1', '2', '3', '4', '5'];
let texto = 'La lluvia en Sevilla es una maravilla';
let regexText = /lluvia/;
let regexPattern = regexText.source;

/* Mensajes */
console.log(`${saludo} Soy ${nombre}`); 
console.log(`Mi nombre en mayúsculas es:${nombre.toUpperCase()}`); 
console.log(`Mi nombre en minúsculas es:${nombre.toLowerCase()}`); 
console.log(`El mensaje de '${saludo}' tiene ${saludo.length} caracteres.`);
console.log(`El tercer número del array con los valores '${lista}' es:${lista[2]}`); 
console.log(`Se añade el número que sigue en orden al final del arreglo y es: ${lista.push('6')}`);

/*Si encuentra el patron lluvia...*/
if (regexText.test(texto) === true) {
    console.log(`Se encontrò el patròn '${regexPattern}' en el texto '${texto}', por lo que el resultado es: ${regexPattern}`);
};