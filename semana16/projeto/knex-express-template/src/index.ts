import express, { Express, Request, Response } from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import { AddressInfo } from "net";
import connection from "./connection";
import dayjs from "dayjs";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  name: string;
  nickname: string;
  email: string;
  id: string;
};

type Task = {
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
};

// Criar usuário

app.post("/user", async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      errorCode = 422;

      throw new Error("Please check the fields");
    }

    await connection.raw(`
      INSERT INTO TodoListUser
          (name, nickname, email, id)
      VALUES (
        "${name}",
        "${nickname}",
        "${email}",
        "${nanoid()}"
      );
    `);

    res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Criar tarefa

app.post("/task", async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description) {
      errorCode = 422;

      throw new Error("Please check the fields");
    }

    const getDate = () => {
      let date = new Date(limitDate);
      let formatedDate =
        date.getFullYear() +
        "-" +
        `00${date.getMonth() + 1}`.slice(-2) +
        "-" +
        `00${date.getDate()}`.slice(-2) +
        "-";
      return formatedDate;
    };

    await connection.raw(`
      INSERT INTO TodoListTask 
          (id, title, description, limit_date, creator_user_id)
      VALUES (
        "${nanoid()}",
        "${title}",
        "${description}",
        "${getDate()}",
        "${creatorUserId}"
      );
    `);
    console.log(nanoid());

    res.status(201).send({ message: "Task created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pegar usuário pelo ID

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id } = req.params;

    const [result] = await connection.raw(`
      SELECT id, nickname FROM TodoListUser WHERE id = "${id}"
    `);

    if (result.length === 0) {
      throw new Error("User not found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pegar tarefa pelo ID

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id } = req.params;

    const [result] = await connection.raw(`
      SELECT * FROM TodoListTask WHERE id = "${id}"
    `);

    if (result.length === 0) {
      throw new Error("Task not found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
