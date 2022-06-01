import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InventoryCanvasComponent } from '../../components/inventory-canvas/inventory-canvas.component';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  @ViewChild('invCanvas') invCanvas: InventoryCanvasComponent | undefined;
  inventories: Array<Inventory> = [];
  constructor(private inventoryService: InventoryService, 
    private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories() {
    this.inventoryService.getInventoryList().snapshotChanges().subscribe(data => {
      this.inventories = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        (a as any)['$key'] = item.key;
        this.inventories.push(a as Inventory);
      })
    })
  }

  emitAction(event: {value: any, action: string}) {
    switch(event.action) {
      case 'create-canvasopen': {
        this.invCanvas?.form.reset();
        if(this.invCanvas) 
        this.invCanvas.actionToExecute = 'create'
        return;
      }
      case 'update': {
        this.inventoryService.updateInventory(event.value);
        return;
      }
      case 'delete': {
        this.inventoryService.deleteInventory(event.value.$key);
        return;
      }
      case 'update-canvasopen': {
        this.invCanvas?.form.patchValue(event.value);
        this.inventoryService.getInventory(event.value.$key);
        if(this.invCanvas) 
        this.invCanvas.actionToExecute = 'update'
        return;
      }
      default:
        this.inventoryService.addInventory(event.value);
        this.toastr.success(`Added a new Resource ${event.value.name}`, "Success")
    }

  }

  
}
