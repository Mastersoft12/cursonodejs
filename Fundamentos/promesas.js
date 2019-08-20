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


let getEmpleados = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id === id);

        if (!empleadoBD) {
            reject(`No existe un empleado en la BD con Id ${id}`)
        } else {
            resolve(empleadoBD)
        }

    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioBD = salarios.find(salario => salario.id === empleado.id);

        if (!salarioBD) {
            reject(`No se encontro un salario para el usuario con Id ${empleado.id}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleados(20).then(empleado => {
    return getSalario(empleado)

}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
}).catch(err => {
    console.log(err)
})

/*
getEmpleados(2).then(empleado => {

    getSalario(empleado).then(respuesta => {
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    }, err => console.log(err))

}, err => console.log(err));*/