import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDashbordComponent } from './prof-dashbord.component';

describe('ProfDashbordComponent', () => {
  let component: ProfDashbordComponent;
  let fixture: ComponentFixture<ProfDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
