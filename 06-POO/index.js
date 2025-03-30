/* Clase Padre (plantilla)*/
class Vehiculo {

    /* Definir atributos */
    ruedas;

    /* Constructor principal*/
    constructor(ruedas) {
        this.ruedas = ruedas; 
    }
    
    /* Método para describir detalles generales */
    detalles() {
        return`Este vehículo tiene ${this.ruedas} ruedas.`;
    }
}; 

/* Clase Hijo (Camioneta) */
class Camioneta extends Vehiculo {

    /* Definir atributos*/
    pasajeros;

    /* Constructor secundario */
    constructor(ruedas, pasajeros) {
        super(ruedas); 
        this.pasajeros = pasajeros; 
    }

    /* Método para describir detalles específicos */
    detallesPasajeros() {
        console.log(`${this.detalles()} Puede transportar ${this.pasajeros} pasajeros.`);  
    }

};

/* Clase Hijo (Bicicleta)*/
class Bicicleta extends Vehiculo {

    /* Definir atributos */
    bicicletaTipo;
    constructor(ruedas, bicicletaTipo) {
        super(ruedas); 
        this.bicicletaTipo = bicicletaTipo; 
    }

    /* Método para describir detalles específicos */
    detallesTipo() {
        console.log(`${this.detalles()} Es una bicicleta de tipo ${this.bicicletaTipo}.`);  
    }

};

const camioneta = new Camioneta(4, 5);
camioneta.detallesPasajeros();  

const bicicleta = new Bicicleta(2, 'Montaña');
bicicleta.detallesTipo(); 

