import "dotenv/config";
import express from 'express';
import cors from "cors";

const app = express();
const PORT = process.env.Vitrine_fe_Port || 3000;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});