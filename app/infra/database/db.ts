import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { DB_HOST } from '../../config/env.ts';

try {
  const db = await client.connect(DB_HOST);
  logger.info("Conexão com o banco de dados estabelecida com sucesso.");
} catch (err) {
  logger.warning(`Erro ao estabelecer conexão com o banco de dados em ${DB_HOST}: ${err}`);
}

export default db;