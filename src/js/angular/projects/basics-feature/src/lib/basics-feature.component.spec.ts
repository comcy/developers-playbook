import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsFeatureComponent } from './basics-feature.component';

describe('BasicsFeatureComponent', () => {
  let component: BasicsFeatureComponent;
  let fixture: ComponentFixture<BasicsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
