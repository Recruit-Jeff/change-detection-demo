import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {
  @Input() newData!: Observable<Todo[]>;
  public todos: Todo[] = [];

  ngOnInit(): void {
    this.newData.subscribe((data) => {
      this.todos = data;
    });
  }
}
