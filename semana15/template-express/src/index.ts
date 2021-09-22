import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./data";
import { country } from "./types";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/countries", (req: Request, res: Response) => {
  res.status(200).send(countries);
});

app.get("/countries/:id", (req: Request, res: Response) => {
  try {
    if (isNaN(Number(req.params.id))) {
      throw new Error("Invalid id");
    }

    const result: country | undefined = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    if (!result) {
      throw new Error("Not found");
    }

    res.send(result);
  } catch (error: any) {
    res.status(404).send(error.message);
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
