// Writer.repository.ts
import { AppDataSource } from "../config/database";
import { Writer } from "../entities/Writer.entity";

export const WriterRepo = AppDataSource.getRepository(Writer);

