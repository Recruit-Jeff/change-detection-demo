import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Todo } from './models/types';
import { initialData } from './data/initial-data';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public todos: Todo[] = initialData;
  public todos = new BehaviorSubject(initialData);
  public title = 'change-detection-demo';

  public toggleFirst() {
    // this.todos[0].isCompleted = !this.todos[0].isCompleted;
    // const newTodos = [...this.todos];
    // newTodos[0].isCompleted = !newTodos[0].isCompleted;
    // this.todos = newTodos;
  }

  public addTodo() {
    // this.todos.push({
    //   id: 3,
    //   description: 'The third to-do item',
    //   isCompleted: false,
    // });
    // const newTodos = [...this.todos];
    // newTodos.push({
    //   id: 3,
    //   description: 'The third to-do item',
    //   isCompleted: false,
    // });
    // this.todos = newTodos;
    this.todos.next([
      {
        id: 3,
        description: 'The third to-do item',
        isCompleted: false,
      },
    ]);
  }

  public onToggle(id: number) {
    // const todoToToggle = this.todos.find((todo) => todo.id === id)!;
    // todoToToggle.isCompleted = !todoToToggle.isCompleted;
  }

  public dummy() {}
}
