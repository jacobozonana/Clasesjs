class Persona{
    constructor (nombre, apellido1, apellido2, edad, sexo, peso, altura, cumple){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.cumple = cumple;
    }
    calcularIMC(){
        var imc = this.peso / this.altura
        return `Tu IMC es ${Math.round (imc)}`
        
    }
    esMayordeEdad(){
        if (this.edad >= 18) {
            return `Eres Mayor de Edad`
        }
        else {
            return `No eres mayor de edad`
        }
    }
    tuRFC(){
        var rfc = this.nombre;
        var rfc2 = this.cumple;
        var rfc3 = this.apellido1;
        var rfc4 = this.apellido2;
        var rfc1 = rfc.slice(0,1);
        var rfc5 = rfc3.slice(0,2);
        var rfc6 = rfc4.slice(0,1);
        var hom = this.sexo;
        var rfc7 = hom.slice(0,3)
        var rfcfinal = rfc5+rfc6+rfc1+rfc2+rfc7
        return rfcfinal.toUpperCase()
        
    }
}

let jacobo = new Persona("Jacobo", "Zonana", "Nagar", "41", "Hombre", 75, 1.750, "790109");


console.log(jacobo)
console.log(jacobo.esMayordeEdad())
console.log(jacobo.calcularIMC())
console.log(jacobo.tuRFC())