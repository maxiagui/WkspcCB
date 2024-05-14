const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT =require('./config/activePort');
const userRoutes = require('./routes/userAllRoutes');

// Connect to database
connectDB();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });
// // ...

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});




// Definición de los modelos
// ...

// Configuración de las rutas
// ...
