const ruta = (elementos) => {
    const extension = elementos.pop();
    const direccion = elementos.join('/');
    const rutaCompleta = `${direccion}.${extension}`;
    return rutaCompleta;
};

const input1 = [
    'Downloads',
    'videos',
    'capture',
    'mp4',
];
console.log(ruta(input1)); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodingGame',
    'python',
    'py',
];
console.log(ruta(input2)); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
console.log(ruta(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'