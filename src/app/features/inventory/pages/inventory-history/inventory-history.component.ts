import { Component, OnInit } from '@angular/core';
import { InventoryHistory } from '../../models/inventory-history';
import { InventoryHistoryService } from '../../services/inventory-history.service';

@Component({
  selector: 'app-inventory-history',
  templateUrl: './inventory-history.component.html',
  styleUrls: ['./inventory-history.component.scss']
})
export class InventoryHistoryComponent implements OnInit {
  history: Array<InventoryHistory> = [];
  loading = true;
  constructor(private ihService: InventoryHistoryService) { }

  ngOnInit(): void {
    this.getInventoryHistories();
  }

  getInventoryHistories() {
    this.ihService.getInventoryHistoryList().snapshotChanges().subscribe(data => {
      this.history = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        (a as any)['$key'] = item.key;
        this.history.push(a as InventoryHistory);
      })
      this.loading = false;
    })
  }

}
