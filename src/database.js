const mongoose = require ('mongoose')

const { URL_BD_APOLUS } = process.env

// Conexion a la base de datos
mongoose.connect(`${URL_BD_APOLUS}`, { 
    useNewUrlParser: true , 
    useUnifiedTopology: true,
    useCreateIndex: true,
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
