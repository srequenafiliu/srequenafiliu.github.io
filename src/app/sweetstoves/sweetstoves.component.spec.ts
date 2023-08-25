import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetstovesComponent } from './sweetstoves.component';

describe('SweetstovesComponent', () => {
  let component: SweetstovesComponent;
  let fixture: ComponentFixture<SweetstovesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetstovesComponent]
    });
    fixture = TestBed.createComponent(SweetstovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
