import { Body, Get, JsonController, Param, Post, Put } from "routing-controllers";
import BaseController from "./base/Base.controller";
import { IBaseData } from "./base/Base.interface";

@JsonController("/dogs")
class DogsController extends BaseController{
  constructor(){
    super("dogs")
  }

  @Get("/:id")
  public async getDog(@Param("id") id: number){
    return super.getOneData(id);
  }

  @Post()
  public async createDog(@Body() body: IBaseData){
    return super.createElement(body);
  }

  @Put("/:id")
  public async updateDog(@Param("id") id: number, @Body() body: IBaseData){
    return super.updateElement(id, body);
  }
}

export default DogsController;