// Writer.service.ts
import { WriterRepo } from "../repositories/Writer.repository";
import { Writer } from "../entities/Writer.entity";

export class WriterService {
  async createWriter(data: Partial<Writer>): Promise<Writer> {
    const w = WriterRepo.create(data);        // Construye la entidad
    return WriterRepo.save(w);                // Persiste en BD
  }
  async getAllWriters(): Promise<Writer[]> {
    return WriterRepo.find({ relations: ["books"] }); // Incluye libros
  }
}