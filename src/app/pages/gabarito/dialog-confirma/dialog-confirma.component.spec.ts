import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmaComponent } from './dialog-confirma.component';

describe('DialogConfirmaComponent', () => {
  let component: DialogConfirmaComponent;
  let fixture: ComponentFixture<DialogConfirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfirmaComponent]
    });
    fixture = TestBed.createComponent(DialogConfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
