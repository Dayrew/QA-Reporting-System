import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta de salud (Render la usa mucho)
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('OK');
});

// Aquí luego irán tus rutas
// app.use('/api/reports', reportRoutes);

export default app;
