import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types";

const app = express()

app.use(cors()) // Evitar erros de cors em requisições
app.use(express.json()) // para quando receber um body, ele vem em json

app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})

app.get('/test/:fruit', (req: Request, res: Response) => {
    if (req.params.fruit === "abobrinha") {
        res.send("The key is abobrinha").status(200)
    } else {
        res.status(404).send("Abobrinha not found.")
    }
})

app.get('/countries', (req: Request, res: Response) => {
    res.status(200).send(countries)
})

app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        // Se enviar um id que não é numero
        if (!Number(req.params.id)) { // 1a etapa: verificar dados de input
            throw new Error("Invalid id")
        }

        // 2a etapa: acessar a base de dados e buscar os dados necessários
        const result: country | undefined = countries.find((country) => country.id === Number(req.params.id))

        // 3a etapa: verificar se a resposta é válida
        if (result) {
            res.send(result) // 4a etapa: responder ao usuário
        } else {
            throw new Error("Not found")
        }
    } catch (error: any) {
        res.status(400).send(error.message)
    }

})

app.delete('/countries/:id', (req: Request, res: Response) => {
    try {
        // Validação de token
        const token = req.headers.authorization
        if (!token) {
            res.statusCode = 401
            throw new Error("User not registered, please verify your authorizaton header")
        }

        // Verificar se o id é válido
        if (!Number(req.params.id)) {
            res.statusCode = 400
            throw new Error("Invalid id")
        }

        // Encontrar o país a ser deletado
        const index = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })

        if (index === -1) { // não encontrou
            res.statusCode = 404
            throw new Error("Country not found")
        }

        countries.splice(index, 1)

        res.status(204).end()
    } catch (error: any) {
        res.send(error.message)
    }
})
