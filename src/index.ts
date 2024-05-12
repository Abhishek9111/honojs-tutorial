import { Hono } from "hono";

const app = new Hono();

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // Do validation
    console.log("here");
    await next();
  } else {
    return c.text("You dont have acces");
  }
}

// app.use(authMiddleware);

app.get("/", authMiddleware, async (c) => {
  return c.text("Hello Hono!");
});

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

export default app;
