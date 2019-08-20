let sumar = (a, b) => a+b;

let saludar = () => 'Hola Mundo';

let saludarPorNombre = nombre => `Hola ${nombre}`

console.log(sumar(1,4));

console.log(saludar());

console.log(saludarPorNombre('Fabio'))

let superHeroe = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getResumen () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(superHeroe.getResumen());