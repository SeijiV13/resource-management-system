import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory-canvas',
  templateUrl: './inventory-canvas.component.html',
  styleUrls: ['./inventory-canvas.component.scss']
})
export class InventoryCanvasComponent implements OnInit {
  form: FormGroup;
  actionToExecute = 'create';
  @Output() action = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      $key: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', [Validators.minLength(1)]]

    })
  }

  ngOnInit(): void {
  }

  emitAction() {
    this.action.emit({value: this.form.value, action: this.actionToExecute})
    this.form.reset();
  }

}
