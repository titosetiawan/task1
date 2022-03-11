import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Model} from "../model/model.model";
import {count} from "rxjs";

@Component({
  selector: 'app-induk',
  templateUrl: './induk.component.html',
  styleUrls: ['./induk.component.css']
})
export class IndukComponent implements OnInit {
  formAdd!: FormGroup
  sendMessage!: Model

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAdd = this.formBuild.group({
      'id': [null],
      'qty': [null],
      'price': [null],
      'total': [null],
      'count': [null]
    })
  }

  save(): void {
    let model = <Model>{};
    model.id = this.formAdd.controls['id'].value
    model.qty = this.formAdd.controls['qty'].value
    model.price = this.formAdd.controls['price'].value
    model.count = this.formAdd.controls['count'].value
    this.sendMessage = model;
    model.total = model.qty * model.price

    for (let i = 0; i < count.length; i++) {
      model.count = model.price
      console.log(model.count)
    }

    console.log(model.total)
  }

  getMessage($event: any): void {
    this.formAdd.controls['id'].setValue($event.id)
    this.formAdd.controls['qty'].setValue($event.qty)
    this.formAdd.controls['price'].setValue($event.price)
    this.formAdd.controls['total'].setValue($event.total)
    this.formAdd.controls['count'].setValue($event.count)
  }
}
