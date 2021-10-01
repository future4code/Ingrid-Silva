import express, { Express, Request, Response } from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  name: string;
  nickname: string;
  email: string;
  id: string;
};

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
