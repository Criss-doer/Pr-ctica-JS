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