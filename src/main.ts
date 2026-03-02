import express, { Request, Response } from "express";
import crypto from "crypto";

const app = express();

app.post("/signup", (req: Request, res: Response) => {
  console.log("Criando conta...");
  const accountId = crypto.randomUUID();
  res.json({ accountId });
});

app.listen(3000);
