import express, { Request, Response } from "express";
import crypto from "crypto";
import pgp from "pg-promise";
import { validateCpf } from "./validateCpf";
import { validatePassword } from "./validatePassword";
import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
const app = express();
app.use(express.json());

const connection = pgp()("postgres://postgres:123456@db:5432/app");

app.post("/signup", async (req: Request, res: Response) => {
  const account = req.body;
  const accountId = crypto.randomUUID();
  if (!validateName(account.name)) {
    return res.status(422).json({ message: "Invalid name" });
  }
  if (!validateEmail(account.email)) {
    return res.status(422).json({ message: "Invalid email" });
  }
  if (!validateCpf(account.document)) {
    return res.status(422).json({ message: "Invalid document" });
  }
  if (!validatePassword(account.password)) {
    return res.status(422).json({ message: "Invalid password" });
  }
  await connection.query(
    "insert into ccca.account (account_id, name, email, document, password) values ($1, $2, $3, $4, $5)",
    [
      accountId,
      account.name,
      account.email,
      account.document,
      account.password,
    ],
  );
  res.json({
    accountId,
  });
});

app.get("/accounts/:accountId", async (req: Request, res: Response) => {
  const accountId = req.params.accountId;
  const [account] = await connection.query(
    "select * from ccca.account where account_id = $1",
    [accountId],
  );
  res.json(account);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
