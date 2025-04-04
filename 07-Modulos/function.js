/* Exportamos la funcion que valida el email */
export function verificarEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) === false) {
        return 'Email invalido'; 
    }
    else {
        return 'Email valido'; 
    }
}

export default verificarEmail; 