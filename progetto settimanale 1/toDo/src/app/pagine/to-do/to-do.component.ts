import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { ToDo } from 'src/app/to-do.interface';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  todos!: ToDo[];
  nuovoToDo: string = '';
  controllo: boolean = false;
  constructor(private td: ToDoService) {}
  ngOnInit(): void {
    this.prova();
  }
  ngOnChange(): void {}
  async prova() {
    this.todos = await this.td.getFiltered(false);
    this.controllo = true;
  }
  async aggiungi() {
    if (this.nuovoToDo.trim() != '') {
      const todoMom: ToDo = { id: 1, title: this.nuovoToDo, completed: false };
      this.controllo = false;
      this.td.add(todoMom);
      this.prova();
      this.nuovoToDo = '';
    }
    this.nuovoToDo = '';
  }
  async aggiorna(id: number) {
    this.td.update(id);
    this.prova();
  }
  async elimina(id: number) {
    const momToDo: ToDo = { id: id, title: 'annamoooooo', completed: true };
    this.td.remove(momToDo);
    this.prova();
    console.log(this.todos);
  }
}
