import { Get} from "routing-controllers";
import { IBaseController, IBaseData, TBaseMessage, TBaseResponse } from "./Base.interface";
import Service from "./Base.service";
import { error, success } from "../data/message.data";

class BaseController implements IBaseController{
  private readonly service: Service;
  constructor(nameTable: string){
    this.service = new Service(nameTable);
  }

  @Get()
  public async getAllData(): Promise<TBaseResponse>{
    const all = await this.service.getAll();

    return Object.assign({
      data: all,
    }, success) 
  }

  public async getOneData(id: number): Promise<TBaseResponse>{
    const one = await this.service.getOne(id);

    return Object.assign({data: one}, success);
  };

  public async createElement(body: IBaseData):Promise<TBaseMessage>{
    const created = await this.service.createElement(body);
    if(Array.isArray(created) && !created.length){
      return error;
    }

    return success;
  };

  public async updateElement( id: number, body: IBaseData): Promise<TBaseResponse>{
    const updated = await this.service.updateElement(id, body);

    if(updated.length){
      return Object.assign({data: updated}, error);
    } 
    
    return Object.assign({data: updated}, success);
  };

/*   @Delete("/:id")
  public async removeElement(@Param("id") id: number): Promise<TBaseMessage>{
    return {
      code: 200,
      message: "deleted"
    }
  }; */
}

export default BaseController;