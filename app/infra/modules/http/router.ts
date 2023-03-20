import { Router, Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
// import from "../../controller/product.controller.ts";
const router = new Router({
  prefix: "/v1"
});

router
  .get('/', (ctx: Context)=>{
    ctx.response.status = 200;
    ctx.response.body = { 
      message: "Welcome to the Dinosaur API´s!",
      text: "Welcome to the Dinosaur API´s!",
    };
  })
  .post('/', (ctx: Context)=>{
    ctx.response.status = 201;
    ctx.response.body = {
       message: "Welcome to the Dinosaur API´s!",
    };
  })
  .put('/', (ctx: Context)=>{
    ctx.response.status = 200;
    ctx.response.body = {
       message: "Welcome to the Dinosaur API´s!",
    };
  })
  .delete('/', (ctx: Context)=>{
    ctx.response.status = 200;
    ctx.response.body = {
       message: "Welcome to the Dinosaur API´s!",
    };
  })

export default router;