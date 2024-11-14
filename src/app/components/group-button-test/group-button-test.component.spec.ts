import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupButtonTestComponent } from './group-button-test.component';

describe('GroupButtonTestComponent', () => {
  let component: GroupButtonTestComponent;
  let fixture: ComponentFixture<GroupButtonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupButtonTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
