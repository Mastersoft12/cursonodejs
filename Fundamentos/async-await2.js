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


let getEmpleados = async (id) => {

    let empleadoBD = empleados.find(empleado => empleado.id === id);

    if (!empleadoBD) {
        throw new Error(`No existe un empleado en la BD con Id ${id}`)
    } else {
        return empleadoBD
    }

}

let getSalario = async (empleado) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id);

    if (!salarioBD) {
        throw new Error(`No se encontro un salario para el usuario con Id ${empleado.id}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        };
    }

}

let getInformacion = async (id) => {
    let empleado = await getEmpleados(id);
    let salario = await getSalario(empleado);
    return `${salario.nombre} tiene un salario de ${salario.salario}`
}


getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));