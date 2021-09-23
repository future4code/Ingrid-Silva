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

app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;

  try {
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }

    if (!result.length) {
      throw new Error("Not found");
    }

    res.send(result);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
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

app.post("/countries/:id", (req: Request, res: Response) => {
  try {
  } catch (error: any) {}
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
