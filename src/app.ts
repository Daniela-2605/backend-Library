import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import writerRouter from "./routes/writer.routes";
import bookRouter from "./routes/book.routes";
import { AppDataSource } from "./config/database";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});

app.use("/writers", writerRouter);
app.use("/books", bookRouter);

// Ruta para no encontrados
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Middleware de manejo de errores
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Inicialización de la base de datos y arranque del servidor
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB init error:", err);
    process.exit(1);
  });
