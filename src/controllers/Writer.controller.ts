// Writer.controller.ts
import { Request, Response, NextFunction } from "express";
import { WriterService } from "../services/Writer.service";

const writerService = new WriterService();

export const createWriter = async (req: Request, res: Response, next: NextFunction) => {
  try { const writer = await writerService.createWriter(req.body); res.status(201).json(writer); }
  catch (err) { next(err); }
};

export const getWriters = async (_req: Request, res: Response, next: NextFunction) => {

  try { const writers = await writerService.getAllWriters(); res.json(writers); }
  catch (err) { next(err); }
};