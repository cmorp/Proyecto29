const fs = require('fs');

const citasJson = () => JSON.parse(fs.readFileSync('citas.json', 'utf8'));

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = citasJson()
    citas.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Cita registrada con éxito.');
};

const leer = () => {
    const citas = citasJson()
    if (citas.length === 0) {
        console.log('No hay citas registradas en el sistema.');      
    } else {
        citas.forEach(e => {
            console.log(`Nombre: ${e.nombre},Edad: ${e.edad},Tipo: ${e.animal},Color: ${e.color},Enfermedad: ${e.enfermedad} \n`);
        });
    }
}

module.exports = { registrar, leer };