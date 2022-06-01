import { Component, Input, OnInit } from '@angular/core';
import { InventoryHistory } from '../../models/inventory-history';

@Component({
  selector: 'app-inventory-history-item',
  templateUrl: './inventory-history-item.component.html',
  styleUrls: ['./inventory-history-item.component.scss']
})
export class InventoryHistoryItemComponent implements OnInit {
  @Input() history: InventoryHistory | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
