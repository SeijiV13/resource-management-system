import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBaseComponent } from './inventory-base.component';

describe('InventoryBaseComponent', () => {
  let component: InventoryBaseComponent;
  let fixture: ComponentFixture<InventoryBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
