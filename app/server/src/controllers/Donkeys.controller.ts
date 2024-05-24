import { Body, Get, JsonController, Param, Post, Put } from "routing-controllers";
import BaseController from "./base/Base.controller";
import { IBaseData } from "./base/Base.interface";

@JsonController("/donkeys")
class DonkeysController extends BaseController{
  constructor(){
    super("donkeys")
  }

  @Get("/:id")
  public async getDonkey(@Param("id") id: number){
    return super.getOneData(id);
  }

  @Post()
  public async createDonkey(@Body() body: IBaseData){
    return super.createElement(body);
  }

  @Put("/:id")
  public async updateDonkey(@Param("id") id: number, @Body() body: IBaseData){
    return super.updateElement(id, body);
  }
}

export default DonkeysController;