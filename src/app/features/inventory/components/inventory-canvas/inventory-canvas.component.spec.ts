import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCanvasComponent } from './inventory-canvas.component';

describe('InventoryCanvasComponent', () => {
  let component: InventoryCanvasComponent;
  let fixture: ComponentFixture<InventoryCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
