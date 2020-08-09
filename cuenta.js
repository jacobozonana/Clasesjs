class Cuenta{
    constructor (titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
        
    }
   
    depositar(deposito){
        if(this.cantidad + deposito <= 900 && this.cantidad + deposito >=10){
        var a = this.cantidad + deposito;
        this.cantidad = a
        return `Gracias por tu deposito tu saldo es de ${a}`;}
        else {
        return `No puedes depositar eso, Busca otro Banco,`;
        }
    }
    retirar(retiro){
       if(this.cantidad - retiro <= 900 && this.cantidad - retiro >=10){
        var a = this.cantidad - retiro;
        this.cantidad = a
        return `Que tengas Buen dia, tu saldo es de ${a}`;}
        else {
        return `No puedes retirar tanto, tu saldo no puede ser menor de 10,`;
        }
    }
}


let jacobo = new Cuenta("Jacobo", 890);


console.log(jacobo.depositar(10))
console.log(jacobo.retirar(8))
console.log(jacobo.cantidad)








