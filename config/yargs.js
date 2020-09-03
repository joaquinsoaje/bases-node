const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar usando la base dada', opt)
            .command('crear', 'Crea o sobreescribe un archivo con la tabla de multiplicar usando la base dada', opt)
            .help('h')
            .alias('h', 'help')
            .argv;

const { help } = require('yargs');

module.exports = {
    argv
}