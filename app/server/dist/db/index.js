"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const config = {
    host: "localhost",
    port: 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PWD || "root",
    database: "human_friends",
};
const conn = promise_1.default.createConnection(config);
exports.default = conn;
//# sourceMappingURL=index.js.map