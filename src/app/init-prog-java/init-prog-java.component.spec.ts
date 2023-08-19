import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitProgJavaComponent } from './init-prog-java.component';

describe('InitProgJavaComponent', () => {
  let component: InitProgJavaComponent;
  let fixture: ComponentFixture<InitProgJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitProgJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitProgJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
