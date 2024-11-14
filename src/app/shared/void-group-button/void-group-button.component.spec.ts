import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidGroupButtonComponent } from './void-group-button.component';

describe('VoidGroupButtonComponent', () => {
  let component: VoidGroupButtonComponent;
  let fixture: ComponentFixture<VoidGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoidGroupButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoidGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
