"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
require("cors");
const Cats_controller_1 = __importDefault(require("./controllers/Cats.controller"));
const Dogs_controller_1 = __importDefault(require("./controllers/Dogs.controller"));
const Hamster_controller_1 = __importDefault(require("./controllers/Hamster.controller"));
const Horses_controller_1 = __importDefault(require("./controllers/Horses.controller"));
const Donkeys_controller_1 = __importDefault(require("./controllers/Donkeys.controller"));
const TypeAnimals_controller_1 = __importDefault(require("./controllers/TypeAnimals.controller"));
dotenv_1.default.config();
const port = process.env.PORT || 3340;
class App {
    constructor() {
        this.run = () => {
            (0, routing_controllers_1.createExpressServer)({
                routePrefix: "/api",
                controllers: [Cats_controller_1.default, Dogs_controller_1.default, Hamster_controller_1.default, Horses_controller_1.default, Donkeys_controller_1.default, TypeAnimals_controller_1.default],
                cors: true
            }).listen(port);
            process.on("beforeExit", () => __awaiter(this, void 0, void 0, function* () {
                (yield this.db).end();
            }));
        };
        this.db = db_1.default;
    }
}
const app = new App();
app.run();
//# sourceMappingURL=index.js.map