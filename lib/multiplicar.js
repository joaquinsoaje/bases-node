const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {

        validarParametros(base, limite, reject);

        const archivoNombre = `tabla-del-${base}-al-${limite}.txt`;
        let data = '';
        console.log(`Creando archivo...`.yellow);
        for (let i = 1; i<=10; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }
        
        fs.writeFile(`tablas/${archivoNombre}`, data, (err) => {
            if (err) reject(err);
            else resolve(`${ archivoNombre }`);
        });            
    })
};

let listarTabla = (base, limite) => {
    validarParametros(base, limite, false);
    
    mostrarEncabezado(base);

    for (let i = 1; i<=limite; i++) {
        console.log(`${base} * ${i} = ${i*base}\n`);
    }
}

let validarParametros = (base, limite, reject) => {
    let texto = '';

    if (!Number(base)) 
        texto += `El valor introducido ${base} no es un numero\n`;
    if (!Number(limite))
        texto += `El valor introducido ${limite} no es un numero\n`;

    if (texto) 
        if(reject) reject(texto) 
            else throw new Error(texto);
}

let mostrarEncabezado = (base) => {
    console.log('==================='.green);
    console.log(` Tabla de ${base}`.green);
    console.log('==================='.green);
}

module.exports = {
    crearArchivo,
    listarTabla
}
