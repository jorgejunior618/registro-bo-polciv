import { Pool } from "pg";

const connectionString = 'postgres://uuelxjvs:jcMUy3vS_w568g-2k_8E1YZkbXX_qBlZ@kesavan.db.elephantsql.com/uuelxjvs';
const db = new Pool({ connectionString });

export default db;
