// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
              resolve({ id: 1, nombre: 'John Doe' });
              }
            }, 2000);
          });
        }
    
obtenerUsuario(1).then(usuario => {
    console.log(usuario);
});