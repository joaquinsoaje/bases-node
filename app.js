const {crearArchivo} = require('./lib/multiplicar');

const argv = process.argv;
const param = argv[2];
const base = param.split('=')[1];

crearArchivo(base)
    .then( archivo => console.log(`Àrchivo creado: ${ archivo }`))
    .catch(err => console.log(err))