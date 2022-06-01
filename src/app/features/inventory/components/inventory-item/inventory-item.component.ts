import { Component, Input, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {
  @Input() inventory: Inventory | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
