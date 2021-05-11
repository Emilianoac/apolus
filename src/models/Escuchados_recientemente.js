const { Schema, model } = require('mongoose');

const escuchasRecientesSchema = new Schema({
    nombre: String,
    miniatura: String,
});

module.exports = model('EscuchasRecientes', escuchasRecientesSchema);