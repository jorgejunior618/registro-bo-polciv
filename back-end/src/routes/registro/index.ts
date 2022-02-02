import { NextFunction, Request, Response, Router } from "express";
import Registro from "../../models/Registro";
import RegistroRepo from "../../repositories/RegistroRepo";

const registroRouter = Router();
const REGISTRO_BASE_URL = '/registros'

registroRouter.get(REGISTRO_BASE_URL, async (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {
  try {
    const registros: Registro[] = await RegistroRepo.search();
  
    response.status(200).send({ registros });
  } catch (error) {
    next(error);
  }
});

registroRouter.post(REGISTRO_BASE_URL, async (
  
  request: Request<Registro>, 
  response: Response, 
  next: NextFunction
) => {
  try {
    const registro: Registro = request.body;
  
    await RegistroRepo.create(registro);
  
    response.sendStatus(201);
  } catch (error) {
    next(error);
  }
});
