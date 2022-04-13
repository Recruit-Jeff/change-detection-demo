import { Component } from '@angular/core';
import { initialData } from './data/initial-data';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todosInputObservable = new BehaviorSubject(initialData);

  public addTodo() {
    const newTodos = initialData;
    newTodos.push({
      id: 3,
      description: 'The third to-do item',
      isCompleted: false,
    });
    this.todosInputObservable.next(newTodos);
  }
}
