import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './User/Users.controllers.js';
import { TodoController } from './Todo/todo.controler.js';

@Module({
  imports: [],
  controllers: [AppController, UserController,TodoController],
  providers: [AppService],
})
export class AppModule {}
