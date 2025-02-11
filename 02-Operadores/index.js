/* List */
let list = [1, 2, 3, 5, 10, 'texto1', 'texto2'];

/* Objects */
let obj1 = {
    Nombre: 'Jassiel',
    edad: 18
}; 
let obj2 = {
    Nombre: 'Eduardo',
    edad: 19
};

/* Results */
console.log(`¿El número 10 es mayor que el número 5? ${list[4] > list[3]}`);
console.log(`¿El número 10 es menor que el número 5? ${list[4] < list[3]}`);
console.log(`¿El número 1 es igual al número 2? ${list[0] === list[1]}`);
console.log(`¿El texto 1 es igual al texto 2? ${list[5] === list[6]}`);
console.log(`¿Los objetos son iguales? ${JSON.stringify(obj1) === JSON.stringify(obj2)}`);
console.log(`AND lógico: ${list[4] > list[3] && list[4] < list[3] }`);
console.log(`OR lógico: ${list[0] > list[1] || list[2] < list[3] }`); 
console.log(`La suma de 10 + 3: ${list[4] + list[2]}`);
console.log(`La resta de 10 - 3: ${list[4] - list[2]}`);
console.log(`La multiplicación de 10 * 3: ${list[4] * list[2]}`);
console.log(`La división de 10 / 3: ${list[4] / list[2]}`);
console.log(`10 módulo de 3: ${list[4] % list[2]}`);