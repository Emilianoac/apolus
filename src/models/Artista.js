const {Schema, model} = require('mongoose')
const slugify = require('slugify')



const artistaSchemma = new Schema({
    nombre_artista: {
        type: String, 
        lowercase: true
    },
    banner: String,
    slug: { 
        type: String,
        required: true,
        unique: true,
    },
    albumes:[
        {
            nombre_album: String,
            fecha_lanzamiento: Number,
            "destacado": Boolean,
            "cover_album": String,
            lista_canciones : [
                {
                    nombre_cancion: String,
                    interprete_cancion: String,
                    duracion_cancion: String,
                }
            ]
        }
    ],
    reciente: {
        type: Boolean,
        default: false,
    }
}, {collection: 'artistas'})


artistaSchemma.pre('validate', function(next) {
    
    if(this.nombre_artista) {
        this.slug = slugify(this.nombre_artista, {lower: true, 
        strict: true})
    }

    next()
})

module.exports = model('Artista', artistaSchemma)