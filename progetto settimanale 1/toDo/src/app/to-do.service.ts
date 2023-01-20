import { Injectable } from '@angular/core';
import { ToDo } from './to-do.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: ToDo[] = [
    // {
    //   id:1,
    //   title:"ciao",
    //   completed:true
    // }
  ];

  constructor() {}

  get(): Promise<ToDo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.todos);
      }, 2000);
    });
  }

  add(todo: Omit<ToDo, 'id'>): Promise<ToDo> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const newTodo: ToDo = { ...todo, id: this.todos.length + 1 };
        this.todos.push(newTodo);
        res(newTodo);
      }, 2000);
    });
  }

  remove(tod: Omit<ToDo, 'completed'>): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== tod.id);
        res(tod.id);
      }, 2000);
    });
  }

  update(id: number): Promise<ToDo> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos[id - 1].completed = true;
      }, 2000);
    });
  }

  getFiltered(a: boolean): Promise<ToDo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (res) {
          res(this.todos.filter((p) => p.completed == a));
        } else {
          rej('');
        }
      }, 2000);
    });
  }
}
