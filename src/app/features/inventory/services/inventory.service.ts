import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Inventory } from '../models/inventory';

@Injectable()
export class InventoryService {

  inventoriesRef!: AngularFireList<any>;
  inventoryRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Inventory
addInventory(inventory: Inventory) {
    this.inventoriesRef.push({
      name: inventory.name,
      description: inventory.description,
      quantity: inventory.quantity,
      dateAdded: new Date().toString(),
    });
  }
  // Fetch Single Inventory Object
  getInventory(id: string) {
    this.inventoryRef = this.db.object('inventory/' + id);
    return this.inventoryRef;
  }
  // Fetch Inventorys List
  getInventoryList() {
    this.inventoriesRef = this.db.list('inventory');
    return this.inventoriesRef;
  }
  // Update Inventory Object
  updateInventory(inventory: Inventory) {
    this.inventoryRef.update({
      name: inventory.name,
      description: inventory.description,
      quantity: inventory.quantity,
      dateModified: new Date().toString(),
    });
  }
  // Delete Inventory Object
  deleteInventory(id: string) {
    this.inventoryRef = this.db.object('inventory/' + id);
    this.inventoryRef.remove();
  }
}
