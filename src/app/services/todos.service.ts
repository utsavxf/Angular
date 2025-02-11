import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient){}


   getTodosFromApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<Todo>>(url)
   }

}
