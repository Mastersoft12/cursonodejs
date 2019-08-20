

/*let getNombre = async() =>{
  return 'Fabio';
};*/

let getNombre = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Fabio')
        }, 3000)
    })
}

let saludo = async () =>{
    let nombre = await getNombre();
    return ` Hola ${nombre}`
}



saludo().then(mensaje => {
    console.log(mensaje)
}).catch(e => {
    console.log('Error obteniendo el nombre',e )
})