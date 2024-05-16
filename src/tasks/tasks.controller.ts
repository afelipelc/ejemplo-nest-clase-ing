import { Controller, Get } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}
  
  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }
}
