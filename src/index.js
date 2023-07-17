import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';

dotenv.config(); // Configuración de las variables de entorno

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); // No tiene nada que ver con el framework de CSS