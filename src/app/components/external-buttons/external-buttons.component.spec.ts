import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalButtonsComponent } from './external-buttons.component';

describe('ExternalButtonsComponent', () => {
  let component: ExternalButtonsComponent;
  let fixture: ComponentFixture<ExternalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
