import { type } from "os";
import OrigemDenuncia from "../OrigemDenuncia";

type Registro = {
  id: number,
  origemDenunciaId: number,
  origemDenuncia?: OrigemDenuncia | undefined | null,
  numeroOficio: string | undefined | null,
  orgao: string | undefined | null,
  arquivo: string | undefined | null,
  dataInicioAcontecimentos: string,
  delegado: string,
  delegacia: string,
  restricaoDados: boolean,
};

export type RegistroDb = {
  id: number,
  datainicioacontecimentos: string,
  delegacia: string,
  delegado: string,
  arquivo: string | undefined | null,
  numerooficio: string | undefined | null,
  orgao: string | undefined | null,
  origemdenunciaid: number,
  restricaodados: boolean,
  aceitaarquivo: boolean,
  aceitaoficio: boolean,
  descricao: string
};

export default Registro;
