const { Schema, model } = require('mongoose');

const listasReproduccionSchema = new Schema({
    nombre: String,
    miniatura: String,
}, {collection: 'listasreproduccion'});

module.exports = model('ListasReproduccion', listasReproduccionSchema);