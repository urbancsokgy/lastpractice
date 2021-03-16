import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodtwoComponent } from './herodtwo.component';

describe('HerodtwoComponent', () => {
  let component: HerodtwoComponent;
  let fixture: ComponentFixture<HerodtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerodtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
