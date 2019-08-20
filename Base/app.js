const fs = require('fs');

let base = 2;
let data = '';
for(let i=1; i<10; i++){
    data +=`La operacion de  ${base} * ${i} = ${base * i}\n`
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('tabla-2.txt', data, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2.txt ha sido creado');
});
