const { Schema, model } = require('mongoose');
const slugify = require('slugify')

const listaReproduccionSchema = new Schema({
    nombre_lista: String,
    miniatura_lista: String,
    slug: { 
        type: String,
        required: true,
        unique: true,
    },
    lista_canciones : [
        {
            nombre_cancion: String,
            cover_album: String,
            interprete_cancion: String,
            duracion_cancion: String,
        }
    ]
}, {collection: 'listareproduccion'});


listaReproduccionSchema.pre('validate', function(next) {
    if(this.nombre_lista) {
        this.slug = slugify(this.nombre_lista, {lower: true, 
        strict: true})
    }
    next()
})


module.exports = model('ListasReproduccion', listaReproduccionSchema);