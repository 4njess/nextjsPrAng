import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectAtrComponent } from './object-atr.component';

describe('ObjectAtrComponent', () => {
  let component: ObjectAtrComponent;
  let fixture: ComponentFixture<ObjectAtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectAtrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectAtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
