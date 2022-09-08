import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturComponent } from './literatur.component';

describe('LiteraturComponent', () => {
  let component: LiteraturComponent;
  let fixture: ComponentFixture<LiteraturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraturComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
