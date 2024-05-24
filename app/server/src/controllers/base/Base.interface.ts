import {RowDataPacket } from "mysql2";

export interface IBaseData extends RowDataPacket {
  id: number;
  name: string;
  commands: string;
  birthday: Date;
  type_id: number;
}

export type TBaseMessage = {
  code: number;
  message: string;
}

export type TBaseResponse = {
  data: IBaseData | IBaseData[] | []
} & TBaseMessage;

export interface IBaseController{
  getAllData: () => Promise<TBaseResponse>;
  getOneData: (id: number) => Promise<TBaseResponse>;
  createElement: (body: IBaseData) => Promise<TBaseMessage>;
  updateElement: (id: number, body: IBaseData) => Promise<TBaseResponse>;
 /*  removeElement: (id: number) => Promise<TBaseMessage>; */
}
