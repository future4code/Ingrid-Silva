import express, { Request, Response } from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;

      throw new Error("Please check the fields");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/type/:type", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { type } = req.params;
    const filteredUsers = users.filter(
      (user: User) => user.type.toLowerCase() === type.toLowerCase()
    );

    if (!filteredUsers.length) throw new Error("No users matched this query");

    res.send(filteredUsers);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/search/:name", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name } = req.params;
    const filteredUsers = users.filter(
      (user: User) => user.name.toLowerCase() === name.toLowerCase()
    );

    if (!filteredUsers.length) throw new Error("No users matched this query");

    res.send(filteredUsers);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name } = req.body;
    const lastIndex = users.length - 1;

    users[lastIndex] = {
      ...users[lastIndex],
      name: `${name} - ALTERADO`,
    };

    res.status(200).send();
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.delete("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id } = req.params;

    const removedUser = users.filter((user: User) => user.id !== Number(id));

    res.status(200).send(removedUser);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});
// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
