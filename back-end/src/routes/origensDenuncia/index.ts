import { NextFunction, Request, Response, Router } from "express";
import OrigemDenuncia from "../../models/OrigemDenuncia";
import OrigemDenunciaRepo from "../../repositories/OrigemDenunciaRepo";

const origensDenunciaRouter = Router();
const ORIGENS_BASE_URL = '/origens'

origensDenunciaRouter.get(ORIGENS_BASE_URL, async (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {
  try {
    const origensDenuncia: OrigemDenuncia[] = await OrigemDenunciaRepo.search();
  
    response.status(200).send({ registros: origensDenuncia });
  } catch (error) {
    next(error);
  }
});

export default origensDenunciaRouter;

