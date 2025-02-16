/* Estructura de datos */
/* Arrays */
const numeros = [1, 2, 3, 4, 5]; 
const colores = ['rojo', 'verde', 'azul', 'amarillo'];
/* Objects */
const persona = {
    nombre: 'María',
    edad: 27, 
    profesión: 'diesñadora'
};
/* Variable */
let i;

/* Estructura  de control*/
for (i of numeros) { 
    console.log(i);
};

console.log('----------------');
for (i of colores) { 
    console.log(i);
}; 

console.log('----------------');
for (i in persona) {
    console.log(`${i}: ${persona[i]}`); 
};

console.log('----------------');
for (i=100; i<=100 ;i--) {
    if (i**2===100) {
        console.log(`El numero mas cercano a 100 cuyo cuadrado es menor a 100 es: ${i}`);
        break;
    }
};

console.log('----------------');
for (i of numeros) {
    console.log(i*2);
};