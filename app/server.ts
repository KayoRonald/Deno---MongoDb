import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./infra/modules/http/router.ts";
import activityMiddleware from "./infra/middleware/activityMiddleware.ts";
import notfoundMiddleware from "./infra/middleware/notfoundMiddleware.ts";
import { PORT } from "./config/env.ts";
import logger  from "./config/logger.ts";

const app = new Application(); //instância do aplicativo "oak"
// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(oakCors()); // Enable CORS for All Routes
app.use(activityMiddleware);
app.use(notfoundMiddleware);
app.use(router.routes()); // router server
app.use(router.allowedMethods()); // Enable Methods HTTP

try{
  logger.info(`Servidor da web habilitado para CORS escutando na porta ${PORT}`);
  await app.listen({ port: Number(PORT) });
}catch(err){
  logger.warning(`Erro ao iniciar o aplicativo na porta ${PORT}: ${err}`)
}
