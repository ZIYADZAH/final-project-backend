"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add = (0, express_1.default)();
const PORT = 3000;
add.get("/ziyad", function (req, res) {
    res.send("hello word.");
});
add.listen(PORT, () => {
    console.log(`server 3000 ${PORT}`);
});
