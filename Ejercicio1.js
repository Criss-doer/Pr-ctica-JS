/*
Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente
*/
const usuario = {
    nombre: "Cristina",
    apellidos: "Rodríguez González",
    bootcamp: [
        {
            nombreModulo: "Node.js",
            fechaInicio: "2025-06-10"
        },
        {
            nombreModulo: "Git",
            fechaInicio: "2025-02-28"
        },
        {
            nombreModulo: "React",
            fechaInicio:  "2025-05-12"
        },
    ],
    busquedaActiva: true
};

console.log("Comienzo del módulo de React: ", usuario.bootcamp[2].fechaInicio);