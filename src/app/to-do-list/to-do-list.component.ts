import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
  // @Input() todos: Todo[] = [];
  @Input('todos') newData!: Observable<any>;
  public todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.changeDetectorRef.markForCheck();
    // }, 5000);
    // this.newData.subscribe((data) => {
    //   this.todos = [...this.todos, ...data];
    //   this.changeDetectorRef.markForCheck();
    // });
  }

  public onToggle(id: number) {
    this.toggle.emit(id);
  }
}
