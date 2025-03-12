"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.Vitrine_fe_Port || 3000;
app.use((0, cors_1.default)());
app.get("/hello", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
