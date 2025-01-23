"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/app/user/signup", (req, res) => {
    const { gmail } = req.body;
    const { password } = req.body;
});
app.post("/app/user/signin", (req, res) => {
    const { gmail } = req.body;
    const { password } = req.body;
});
app.connect(3000, () => {
    console.log("Listen at port 3000");
});
