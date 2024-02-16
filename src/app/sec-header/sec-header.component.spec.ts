import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeaderComponent } from './sec-header.component';

describe('SecHeaderComponent', () => {
  let component: SecHeaderComponent;
  let fixture: ComponentFixture<SecHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecHeaderComponent]
    });
    fixture = TestBed.createComponent(SecHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
