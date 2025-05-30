import { AppDataSource } from "../config/database";
import { Book } from "../entities/Book.entity";

export const BookRepo = AppDataSource.getRepository(Book);