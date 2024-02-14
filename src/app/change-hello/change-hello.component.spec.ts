import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHelloComponent } from './change-hello.component';

describe('ChangeHelloComponent', () => {
  let component: ChangeHelloComponent;
  let fixture: ComponentFixture<ChangeHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeHelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
