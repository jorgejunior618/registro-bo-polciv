import db from "../../dataBase/db-config";
import DbError from "../../models/Errors/DbError";
import OrigemDenuncia from "../../models/OrigemDenuncia";

class OrigemDenunciaRepository {
  async search(): Promise<OrigemDenuncia[]> {
    try {
      const query = `
        SELECT *
        FROM OrigensDenuncia
      `;

      const { rows } = await db.query<OrigemDenuncia>(query);

      return rows ?? [];
    } catch (error) {
      throw new DbError('Erro na consulta', error);
    }
  }
}

export default new OrigemDenunciaRepository();

