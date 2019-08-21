const fs = require('fs');

let crearArchivo = async (numero) => {

    if(!Number(numero)){
        throw new Error(`El valor ${numero} no es un numero`)
        return ;
    }
    let data = '';
    for (let i = 1; i < 10; i++) {
        data += `La operacion de  ${numero} * ${i} = ${numero * i}\n`
    }
    fs.writeFile(`tablas/tabla-${numero}.txt`, data, (err) => {
        if (err) throw new Error(`Error creando el archivo`);
    });
    return `El archivo tabla-${numero}.txt ha sido creado`;

}

module.exports = {
    crearArchivo
}

