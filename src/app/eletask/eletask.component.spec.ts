import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletaskComponent } from './eletask.component';

describe('EletaskComponent', () => {
  let component: EletaskComponent;
  let fixture: ComponentFixture<EletaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EletaskComponent]
    });
    fixture = TestBed.createComponent(EletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
