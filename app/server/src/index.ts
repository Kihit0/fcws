import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import dotenv from "dotenv";
import conn from "./db";
import "cors";
import CatsController from "./controllers/Cats.controller";
import DogsController from "./controllers/Dogs.controller";
import HamstersController from "./controllers/Hamster.controller";
import HorsesController from "./controllers/Horses.controller";
import DonkeysController from "./controllers/Donkeys.controller";
import TypeAnimals from "./controllers/TypeAnimals.controller";

dotenv.config();

const port = process.env.PORT || 3340;

class App {
  private readonly db;
  constructor(){
    this.db = conn;
  }
  public run = () => {
    createExpressServer({
      routePrefix: "/api",
      controllers: [CatsController, DogsController, HamstersController, HorsesController, DonkeysController, TypeAnimals],
      cors: true
    }).listen(port);

    process.on("beforeExit", async() => {
      (await this.db).end();
    })
  };


}


const app = new App();
app.run();