import { Controller, Get, Param, Query } from "@nestjs/common";




@Controller("users")
export class  UserController{
@Get("show")
ShowHello(){
    return "hello world"
}
@Get("pages")
showPages(@Query('page') page: number, @Query('limit') limit: number){
    return `All Pages:{page: ${page}, Limit: ${limit}}`;
}


@Get(":id")
showUserById(@Param('id') id: string){
    return `User with ID: ${id}`;
}

}
