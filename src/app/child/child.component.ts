import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Model} from "../model/model.model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() postToParent = new EventEmitter<Model>()

  @Input() message!: Model;

  list!: Model[]
  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.list) {
      this.list.push(this.message)
      console.log(this.count)
    } else {
      if (this.message) {
        this.list = [this.message]
      }
    }
    let count = 0
    for (let i = 0; i < this.list.length; i++) {
      this.count = 0
      this.count += this.list[i].total
    }
  }

  subtotal(): void {

  }

  edit(idx: number): void {
    this.postToParent.emit(this.list[idx])
  }
}
