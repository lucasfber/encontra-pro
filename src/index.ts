import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Esxample app listening on port ${port}`);
});

export { app, server };
