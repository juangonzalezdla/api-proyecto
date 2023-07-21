import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRouter from './routes/user.routes.js';
import cors from 'cors';

dotenv.config(); // Configuración de las variables de entorno

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Middlewares
app.use(cors({
  origin: FRONTEND_URL
}));
app.use(express.json());
// Routes
app.use('/user', userRouter);

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); // No tiene nada que ver con el framework de CSS