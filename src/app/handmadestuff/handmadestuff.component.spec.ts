import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadestuffComponent } from './handmadestuff.component';

describe('HandmadestuffComponent', () => {
  let component: HandmadestuffComponent;
  let fixture: ComponentFixture<HandmadestuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandmadestuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadestuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
