import { Body, Get, JsonController, Param, Post, Put } from "routing-controllers";
import BaseController from "./base/Base.controller";
import { IBaseData } from "./base/Base.interface";

@JsonController("/cats")
class CatsController extends BaseController{
  constructor(){
    super("cats")
  }

  @Get("/:id")
  public async getCat(@Param("id") id: number){
    return super.getOneData(id);
  }

  @Post("")
  public async createCat(@Body() body: IBaseData){
    return super.createElement(body);
  }

  @Put("/:id")
  public async updateCat(@Param("id") id: number, @Body() body: IBaseData){
    return super.updateElement(id, body);
  }
}

export default CatsController;