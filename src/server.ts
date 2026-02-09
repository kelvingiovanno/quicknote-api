import express, { Request, Response} from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "hello world",
    });
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})