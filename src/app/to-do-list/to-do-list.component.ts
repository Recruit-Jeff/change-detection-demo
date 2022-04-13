import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {
  @Input() newData!: Observable<Todo[]>;
}
