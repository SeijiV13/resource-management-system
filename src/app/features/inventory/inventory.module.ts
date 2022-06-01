import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { InventoryHistoryComponent } from './pages/inventory-history/inventory-history.component';
import { InventoryItemComponent } from './components/inventory-item/inventory-item.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import {SidebarModule } from 'ng-cdbangular';
import { InventoryBaseComponent } from './pages/inventory-base/inventory-base.component';
import { InventoryService } from './services/inventory.service';
import { InventoryActionBarComponent } from './components/inventory-action-bar/inventory-action-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//fire module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { InventoryCanvasComponent } from './components/inventory-canvas/inventory-canvas.component';

@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryHistoryComponent,
    InventoryItemComponent,
    InventoryBaseComponent,
    InventoryActionBarComponent,
    InventoryCanvasComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SidebarModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [InventoryService]
})
export class InventoryModule { }
