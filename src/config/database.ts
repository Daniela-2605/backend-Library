import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";

export const AppDataSource = new DataSource({
  type: "sqlite",             // Motor de base de datos SQLite
  database: "db.sqlite",      // Archivo de la base de datos
  synchronize: true,          // Sincroniza automáticamente las tablas
  logging: false,             // Deshabilita el log SQL en consola
  entities: [Writer, Book],   // Entidades cargadas en esta conexión
});