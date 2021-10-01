import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dayjs from "dayjs";

const app: Express = express();

app.use(express.json());
app.use(cors());

type ExtractItem = {
  value: number;
  date: string;
  description: string;
};

type User = {
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
  extract: ExtractItem[];
};

let users: User[] = [];

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, birthday } = req.body;

    if (!name || !cpf || !birthday) {
      errorCode = 422;

      throw new Error("Please check the fields");
    }

    const age = dayjs(new Date()).diff(dayjs(birthday), "y");

    if (age < 18) {
      throw new Error("It is necessary to be at least 18 years old");
    }

    const verifyCPF = users.some((user) => user.cpf === cpf);

    if (verifyCPF) {
      throw new Error("CPF already exists");
    }

    const user: User = {
      cpf,
      name,
      birthday,
      balance: 0,
      extract: [],
    };

    users.push(user);

    res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users/pay", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { date = new Date(), description, value, cpf } = req.body;

    if (!cpf || !description || !value) {
      errorCode = 422;
      throw new Error("Please check the fields");
    }

    users = users.map((user: User) => {
      if (user.cpf !== cpf) return user;

      const transaction = {
        date,
        description,
        value,
      };

      return {
        ...user,
        extract: [...user.extract, transaction],
      };
    });

    res.send("Payment created successfully");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.patch("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, amount } = req.body;

    const userIndex = users.findIndex(
      (u: User) => u.name === name && u.cpf === cpf
    );

    if (userIndex < 0) throw new Error("User not found");

    const user = users[userIndex];
    const updatedBalance = user.balance + amount;

    users[userIndex] = {
      ...user,
      balance: updatedBalance,
    };

    res.status(200).send({ balance: updatedBalance });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (users.length === 0) throw new Error("There is no users yet");

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf } = req.query;

    const user = users.find((u: User) => u.name === name && u.cpf === cpf);

    if (!user) throw new Error("User not found");

    res.status(200).send({ balance: user.balance });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
