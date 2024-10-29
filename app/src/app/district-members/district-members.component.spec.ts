import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMembersComponent } from './district-members.component';

describe('DistrictMembersComponent', () => {
  let component: DistrictMembersComponent;
  let fixture: ComponentFixture<DistrictMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
