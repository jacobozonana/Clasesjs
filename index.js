const Product = require("./product");
const Client = require("./client");

let coca = new Product (`Coca Cola`, 10)
let sprite = new Product ("Sprite", 9.5)
let david = new Client(`David`, `davidzn2@gmail.com`, 5512341234, true)
let elias = new Client(`Elias`, `elias@micorrreo.com`, 5512341234)




console.log(coca.getNombre(), coca.getPrecio())
console.log(sprite.getNombre())
console.log(david.suscribed())
console.log(elias.suscribed())
david.agregarCarrito(coca)
david.agregarCarrito(sprite)
console.log(david.getCarrito())
console.log(david.sumarCarrito())