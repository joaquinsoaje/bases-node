const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)) 
            return reject(`El valor introducido ${base} no es un numero`)

        const archivoNombre = `tabla-${base}.txt`;
        let data = '';
        
        for (let i = 1; i<=10; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }
        
        fs.writeFile(`tablas/${archivoNombre}`, data, (err) => {
            if (err) reject(err);
            else resolve(`archivo ${ archivoNombre } creado`);
        });            
    })
};

module.exports = {
    crearArchivo
}
