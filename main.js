class Perro{
    constructor (nombre, raza, color, comida){
        this.nombre = nombre;
        this.color = color;
        this.raza = raza;
        this.comida = comida;
    }
    come(){
        return `${this.nombre} Come ${this.comida}`
        
    }
}

let scooby = new Perro("Scooby Doo", "Gran Danes", "Cafe", "Scooby Galletas");
let snoopy = new Perro("Snoopy","Beagle", "Blanco con Negro");
let huesos = new Perro("Ayudande de santa", "Galgo")

console.log(snoopy);
console.log(scooby.come());
console.log(huesos);
console.log(scooby.come());

