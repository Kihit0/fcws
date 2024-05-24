import {
  sqlCreateElement,
  sqlGetAllData,
  sqlGetOneById,
  sqlUpdateElementById,
} from "../../db/sql.request";
import conn from "../../db";
import { IBaseData } from "./Base.interface";
import { RowDataPacket } from "mysql2";

interface ITypeAnimals extends RowDataPacket {
  id: number;
  name: string;
}

class Service {
  private readonly db;
  private readonly table;

  constructor(table: string) {
    this.db = conn;
    this.table = table;
  }

  public async getAll() {
    const [all] = await (
      await this.db
    ).query<IBaseData[]>(sqlGetAllData(this.table));
    return all;
  }

  public async getOne(id: number) {
    const [one] = await (
      await this.db
    ).query<IBaseData[]>(sqlGetOneById(this.table, id));

    return one;
  }

  public async createElement(payload: IBaseData) {
    const [typedAnimals] = await (
      await this.db
    ).query<ITypeAnimals[]>(sqlGetAllData("type_animals"));
    const typedAnimalsId = typedAnimals.map((item) => item.id);


    if (!~typedAnimalsId.indexOf(payload.type_id)) {
      return [];
    }

    if(!payload.commands && !payload.name && !payload.birthday){
      return [];
    }

    const [resultHeader] = await (
      await this.db
    ).query<IBaseData[]>(sqlCreateElement(this.table), [
      payload.name,
      payload.commands,
      payload.birthday,
      payload.type_id,
    ]);

    return resultHeader;
  }

  public async updateElement(id: number, payload: IBaseData){
    if(!payload.commands){
      return [];
    }
    const element = await this.getOne(id);

    if(!element.length){
      return [];
    }
  
    const [updated] = await (await this.db).execute<IBaseData[]>(sqlUpdateElementById(this.table, id), [payload.commands]);

    return updated;
  }
}

export default Service;
