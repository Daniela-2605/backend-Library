import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "./Book.entity";

@Entity("writers")
export class Writer {
  @PrimaryGeneratedColumn() id!: number;     // ID único
  @Column() nombre!: string;                // Nombre del autor
  @Column() apellido!: string;              // Apellido del autor
  @Column() nacionalidad!: string;          // Nacionalidad
  @Column("int") edad!: number;             // Edad
  @OneToMany(() => Book, book => book.author, { cascade: true })
  books!: Book[];                           // Libros asociados
}