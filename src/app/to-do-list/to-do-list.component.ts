import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from '../models/types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.changeDetectorRef.markForCheck();
    // }, 5000);
  }

  public onToggle(id: number) {
    this.toggle.emit(id);
  }
}
