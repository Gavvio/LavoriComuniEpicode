import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/to-do.interface';
import { ToDoService } from 'src/app/to-do.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  todos:ToDo[]=[];
  constructor(private td:ToDoService) { }

  ngOnInit(): void {
    this.prova()
  }
  async prova(){
    this.todos=await this.td.getFiltered(true);
  }
  async elimina(id:number){
    const momToDo:ToDo={id:id,title:"annamoooooo",completed:true}
    this.td.remove(momToDo);
    console.log(this.todos);
    this.prova();
  }

}
