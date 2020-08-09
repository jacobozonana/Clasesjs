class Client {
    constructor(nombre, email, telefono, suscrito=false){
    this.nombre = nombre
    this.email = email
    this.telefono = telefono;
    this.suscrito = suscrito;
    this.cart = []
}
suscribed(){
    if (this.suscrito){
        return `${this.nombre} esta suscrito con el correo ${this.email}`
    }else{
        return `${this.nombre} no esta suscrito Suscribete!`
    }
}
agregarCarrito(producto){
    this.cart.push(producto);
}
getCarrito(){
    return this.cart;
}
sumarCarrito(){
    let total=0;
    for(let i=0; i< this.cart.length; i++){
        total = total + this.cart[i].getPrecio()
    }
    return `El total de tu carrito es: ${total}`
}
}
module.exports = Client;