import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../models/types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();

  public onToggle(id: number) {
    this.toggle.emit(id);
  }
}
