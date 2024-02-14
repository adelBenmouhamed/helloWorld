import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHelloComponent } from './home-hello.component';

describe('HomeHelloComponent', () => {
  let component: HomeHelloComponent;
  let fixture: ComponentFixture<HomeHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
