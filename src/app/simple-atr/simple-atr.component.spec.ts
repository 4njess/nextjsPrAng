import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAtrComponent } from './simple-atr.component';

describe('SimpleAtrComponent', () => {
  let component: SimpleAtrComponent;
  let fixture: ComponentFixture<SimpleAtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAtrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleAtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
