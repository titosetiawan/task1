import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndukComponent } from './induk.component';

describe('IndukComponent', () => {
  let component: IndukComponent;
  let fixture: ComponentFixture<IndukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
