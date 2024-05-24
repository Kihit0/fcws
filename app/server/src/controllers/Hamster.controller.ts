import { Body, Get, JsonController, Param, Post, Put } from "routing-controllers";
import BaseController from "./base/Base.controller";
import { IBaseData } from "./base/Base.interface";

@JsonController("/hamsters")
class HamstersController extends BaseController{
  constructor(){
    super("hamsters")
  }

  @Get("/:id")
  public async getHamster(@Param("id") id: number){
    return super.getOneData(id);
  }

  @Post()
  public async createHamster(@Body() body: IBaseData){
    return super.createElement(body);
  }

  @Put("/:id")
  public async updateHamster(@Param("id") id: number, @Body() body: IBaseData){
    return super.updateElement(id, body);
  }
}

export default HamstersController;