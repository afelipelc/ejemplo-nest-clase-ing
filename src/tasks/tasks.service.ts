import { Injectable } from '@nestjs/common';

export type Task = {
  id: number,
  date: Date,
  description: string,
  completed: boolean,
}

@Injectable()
export class TasksService {
  
  private tasks : Task[] = [
    {
      id: 1,
      date: new Date(),
      description: 'Crear proyecto',
      completed: false
    },
    {
      id: 2,
      date: new Date(),
      description: 'Agregar módulo Tasks',
      completed: false
    },
    {
      id: 3,
      date: new Date(),
      description: 'Agregar controlador y servicio a módulo Tasks',
      completed: false
    }
  ];

  findAll(): Task[] {
    return this.tasks;
  }

}
