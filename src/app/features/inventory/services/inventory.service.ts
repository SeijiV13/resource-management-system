import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Inventory } from '../models/inventory';
import { InventoryHistoryService } from './inventory-history.service';

@Injectable()
export class InventoryService {

  inventoriesRef!: AngularFireList<any>;
  inventoryRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase, private inventoryHistoryService: InventoryHistoryService) {}
  // Create Inventory
addInventory(inventory: Inventory) {
    this.inventoriesRef.push({
      name: inventory.name,
      description: inventory.description,
      quantity: inventory.quantity,
      dateAdded: new Date().toString(),
    });
    this.createHistory(
      inventory, 
      "Created new Resource", 
      `Created a new resource named ${inventory.name}`);

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
    this.createHistory(
      inventory, 
      "Updated a Resource", 
      `Updated a resource named ${inventory.name}`);
  }
  // Delete Inventory Object
  deleteInventory(inventory: Inventory) {
    this.inventoryRef = this.db.object('inventory/' + inventory.$key);
    this.inventoryRef.remove();
    this.createHistory(
      inventory, 
      "Deleted a Resource", 
      `Deleted a resource named ${inventory.name}`);
  }

  createHistory(inventory: Inventory, name: string, description: string) {
    const user = localStorage.getItem('user')
    this.inventoryHistoryService.addInventoryHistory(inventory, 
      {
        name,
        description,
        transactionBy: user ? JSON.parse(user).email : '',
        transactionDate: new Date().toString(),
      }
        )
  }
}
``