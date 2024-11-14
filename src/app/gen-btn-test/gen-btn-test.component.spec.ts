import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenBtnTestComponent } from './gen-btn-test.component';

describe('GenBtnTestComponent', () => {
  let component: GenBtnTestComponent;
  let fixture: ComponentFixture<GenBtnTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenBtnTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenBtnTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
