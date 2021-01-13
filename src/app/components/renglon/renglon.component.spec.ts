import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenglonComponent } from './renglon.component';

describe('RenglonComponent', () => {
  let component: RenglonComponent;
  let fixture: ComponentFixture<RenglonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenglonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenglonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
