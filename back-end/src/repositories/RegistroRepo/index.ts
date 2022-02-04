import db from "../../dataBase/db";
import DbError from "../../models/Errors/DbError";
import OrigemDenuncia from "../../models/OrigemDenuncia";
import Registro, { RegistroDb } from "../../models/Registro";

class RegistroRepository {
  fromDbToRegistro(registro: RegistroDb): Registro {
    const {
      arquivo,
      datainicioacontecimentos,
      delegacia,
      delegado,
      id,
      numerooficio,
      orgao,
      origemdenunciaid,
      restricaodados,
      aceitaarquivo,
      aceitaoficio,
      descricao,
    } = registro;

    const newRegistro: Registro = {
      arquivo,
      dataInicioAcontecimentos: datainicioacontecimentos,
      delegacia,
      delegado,
      id,
      numeroOficio: numerooficio,
      orgao,
      origemDenunciaId: origemdenunciaid,
      restricaoDados: restricaodados,
      origemDenuncia: {
        id: origemdenunciaid,
        descricao,
        aceitaArquivo: aceitaarquivo,
        aceitaOficio: aceitaoficio,
      }
    }

    return newRegistro;
  }
  async search(): Promise<Registro[]> {
    try {
      const query = `
        SELECT
          r.id,
          arquivo,
          dataInicioAcontecimentos,
          delegacia,
          delegado,
          numeroOficio,
          orgao,
          origemDenunciaId,
          restricaoDados,
          aceitaArquivo,
          aceitaOficio,
          descricao
        FROM Registros r
        INNER JOIN OrigensDenuncia o
        ON r.origemDenunciaId = o.id
      `;

      const { rows } = await db.query<RegistroDb>(query);

      const registros: Registro[] = rows.map((registro) => {
        return this.fromDbToRegistro(registro);
      })

      return registros ?? [];
    } catch (error) {
      
      throw new DbError('Erro na consulta', error);
    }
  }
  async create({
    origemDenunciaId,
    numeroOficio,
    orgao,
    arquivo,
    dataInicioAcontecimentos,
    delegado,
    delegacia,
    restricaoDados,
  }: Registro): Promise<void> {
    try {
      const query = `
        INSERT 
        INTO Registros
        (
          origemDenunciaId,
          numeroOficio,
          orgao,
          arquivo,
          dataInicioAcontecimentos,
          delegado,
          delegacia,
          restricaoDados
        ) values (
          $1, $2, $3, $4, $5, $6, $7, $8
        )
      `;

      await db.query(query, [
        origemDenunciaId,
        numeroOficio,
        orgao,
        arquivo,
        dataInicioAcontecimentos,
        delegado,
        delegacia,
        restricaoDados,
      ]);
    } catch (error) {
      
      throw new DbError('Erro na consulta', error);
    }
  }
}

export default new RegistroRepository();

