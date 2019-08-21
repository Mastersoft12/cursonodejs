const {crearArchivo} = require('./Multiplicar');

let base = 'po';


crearArchivo(base).then(mensaje => console.log(mensaje)).catch(err => console.log(err))

