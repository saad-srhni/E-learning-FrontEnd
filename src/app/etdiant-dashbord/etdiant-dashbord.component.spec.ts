import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdiantDashbordComponent } from './etdiant-dashbord.component';

describe('EtdiantDashbordComponent', () => {
  let component: EtdiantDashbordComponent;
  let fixture: ComponentFixture<EtdiantDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtdiantDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdiantDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
