import { CommonModule } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  //should be injected using the connstructor only
  constructor(
    private todoService:TodosService
  ){}

  todoItems=signal<Array<Todo>>([]);


  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
