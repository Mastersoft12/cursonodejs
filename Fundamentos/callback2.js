let empleados = [
    {
        id: 1,
        nombre: 'Fabio'
    },
    {
        id: 2,
        nombre: 'Angela'
    },
    {
        id: 3,
        nombre: 'Isabella'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleados = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id);

    if (!empleadoBD) {
        callback(`No existe un empleado en la BD con Id ${empleado.nombre}`)
    } else {
        callback(null, empleadoBD)
    }
}

 let getSalario = (empleado, callback) => {
    //let {idSalario, nombreEmpleado} = empleado;

    let salarioBD = salarios.find(salario => salario.id === empleado.id);

    if(!salarioBD){
        callback(`No se encontro un salario para el usuario ${id}`)
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        });
    }
}





 getEmpleados(2, (err, empleadp) => {
    if (err) {
        return console.log(err)
    }
    //console.log(empleadp);
     getSalario( empleadp, (err, respuesta) => {
         if (err) {
             return console.log(err)
         }else{
             console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
         }
     })
});
