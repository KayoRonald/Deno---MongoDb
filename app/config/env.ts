import { config } from "https://deno.land/x/dotenv/mod.ts";

const PORT = Deno.env.get('PORT') || 8080;
const DB_HOST = Deno.env.get('MONGO_URL') || "mongodb://usuario:senha@host:porta/nome-do-banco?authSource=admin";
const DENO_ENV = Deno.env.get('DENO_ENV') || "development";

export {
  PORT,
  DB_HOST,
  DENO_ENV,
};