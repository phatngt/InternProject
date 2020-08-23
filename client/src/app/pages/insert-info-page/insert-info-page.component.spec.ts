import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInfoPageComponent } from './insert-info-page.component';

describe('InsertInfoPageComponent', () => {
  let component: InsertInfoPageComponent;
  let fixture: ComponentFixture<InsertInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
