const hbs = require('hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let pablabras = texto.split(' ');
    pablabras.forEach((palabra, idx) => {
        pablabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return pablabras.join(' ');
});