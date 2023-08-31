import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitProgWebComponent } from './init-prog-web.component';

describe('InitProgWebComponent', () => {
  let component: InitProgWebComponent;
  let fixture: ComponentFixture<InitProgWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitProgWebComponent]
    });
    fixture = TestBed.createComponent(InitProgWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
