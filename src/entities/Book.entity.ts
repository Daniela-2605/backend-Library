import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Writer } from "./Writer.entity";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn() id!: number;        // ID del libro
  @Column() nombre!: string;                   // Título del libro
  @Column() genero!: string;                   // Género literario
  @Column("int") añoPublicacion!: number;      // Año de publicación
  @ManyToOne(() => Writer, writer => writer.books, { nullable: false })
  @JoinColumn({ name: "authorId" }) author!: Writer; // Relación con Writer
}