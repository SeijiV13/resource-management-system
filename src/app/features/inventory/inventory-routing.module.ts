import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { InventoryHistoryComponent } from './pages/inventory-history/inventory-history.component';
import { InventoryBaseComponent } from './pages/inventory-base/inventory-base.component';

const routes: Routes = [
  {
    path: "",
    component: InventoryBaseComponent,
    children: [
      {
        path: "",
        component: InventoryListComponent
      },
      {
        path: "history",
        component: InventoryHistoryComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class InventoryRoutingModule { }
