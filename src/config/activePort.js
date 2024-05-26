const dotenv = require('dotenv');


dotenv.config();
//se toma la direccion del archivo .env
const PORT = process.env.PORT || 3001; 
module.exports = PORT;