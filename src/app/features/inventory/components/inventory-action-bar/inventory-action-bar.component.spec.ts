import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryActionBarComponent } from './inventory-action-bar.component';

describe('InventoryActionBarComponent', () => {
  let component: InventoryActionBarComponent;
  let fixture: ComponentFixture<InventoryActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
