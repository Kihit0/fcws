import {Get, JsonController, Param } from "routing-controllers";
import BaseController from "./base/Base.controller";

@JsonController("/type-animals")
class TypeAnimals extends BaseController{
  constructor(){
    super("type_animals")
  }

  @Get("/:id")
  public async getTypeAnimals(@Param("id") id: number){
    return super.getOneData(id);
  }
}

export default TypeAnimals;