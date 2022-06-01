import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-inventory-action-bar',
  templateUrl: './inventory-action-bar.component.html',
  styleUrls: ['./inventory-action-bar.component.scss']
})
export class InventoryActionBarComponent implements OnInit {
  @Output() action = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
  }

  emitAction() {
    this.action.emit();
  }

}
