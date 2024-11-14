import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenBtnComponent } from './gen-btn.component';

describe('GenBtnComponent', () => {
  let component: GenBtnComponent;
  let fixture: ComponentFixture<GenBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
