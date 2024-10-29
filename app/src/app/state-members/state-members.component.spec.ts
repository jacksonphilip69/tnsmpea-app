import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMembersComponent } from './state-members.component';

describe('StateMembersComponent', () => {
  let component: StateMembersComponent;
  let fixture: ComponentFixture<StateMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
