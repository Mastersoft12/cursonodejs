let superHeroe = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getResumen: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(superHeroe.getResumen());

//Destructuracion
 let {nombre, apellido,  poder} = superHeroe;
 console.log(nombre, apellido,  poder)