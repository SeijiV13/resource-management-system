import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Inventory } from '../models/inventory';
import { InventoryHistory } from '../models/inventory-history';

@Injectable({
  providedIn: 'root'
})
export class InventoryHistoryService {

  
  inventoriesHistoryRef!: AngularFireList<any>;
  inventoryHistoryRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Inventory
addInventoryHistory(inventory: Inventory, inventoryHistory: InventoryHistory) {
    this.inventoriesHistoryRef.push({
      name: inventoryHistory.name,
      description: inventoryHistory.description,
      transactionBy: inventoryHistory.transactionBy,
      transactionDate: new Date().toString(),
    });
  }

  // Fetch Inventorys List
  getInventoryHistoryList() {
    this.inventoriesHistoryRef = this.db.list('inventory-history');
    return this.inventoriesHistoryRef;
  }


  
}
