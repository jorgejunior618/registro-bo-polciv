import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import Registro from "../../models/Registro";

class RegistroRepository {
  async search(): Promise<Registro[]> {
    try {
      const query = `
        SELECT *
        FROM Registros_BO
      `;

      const { rows } = await db.query<Registro>(query);

      return rows ?? [];
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
        INTO Registros_BO
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
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8
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

