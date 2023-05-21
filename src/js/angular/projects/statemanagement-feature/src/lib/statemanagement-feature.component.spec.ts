import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemanagementFeatureComponent } from './statemanagement-feature.component';

describe('StatemanagementFeatureComponent', () => {
  let component: StatemanagementFeatureComponent;
  let fixture: ComponentFixture<StatemanagementFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatemanagementFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatemanagementFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
