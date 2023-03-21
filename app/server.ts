import { Application, oakCors } from './deps.ts'
import router from "./infra/modules/http/router.ts";
import activityMiddleware from "./infra/middleware/activityMiddleware.ts";
import notfoundMiddleware from "./infra/middleware/notfoundMiddleware.ts";
import { PORT } from "./config/env.ts";
import logger  from "./config/logger.ts";

const app = new Application();
// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(oakCors());
app.use(activityMiddleware);
app.use(notfoundMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

try{
  logger.info(`Servidor da web habilitado para CORS escutando na porta ${PORT}`);
  await app.listen({ port: Number(PORT) });
}catch(err){
  logger.warning(`Erro ao iniciar o aplicativo na porta ${PORT}: ${err}`)
}
