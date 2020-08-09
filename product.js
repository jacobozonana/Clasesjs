class Product {
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    //Getters
    getNombre(){
        return this._nombre
    }
    getPrecio(){
        return this._precio
    }
    //Setters
    setNombre(newName){
        this._nombre = newName
    }
    setPrecio(newPrice){
        this._precio = newPrice
    }
}
module.exports = Product;